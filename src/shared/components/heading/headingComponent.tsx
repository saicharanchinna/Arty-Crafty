import "./headingComponent.scss";

import React, {useCallback} from 'react';
import TooltipComponent from "../tooltip/tooltipComponent";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import InfoIcon from "@mui/icons-material/Info";

interface HeadingComponentProps {
    title: string;
    onBackNavigation?: Function;
}

const HeadingComponent = (props: HeadingComponentProps) => {

    const {title, onBackNavigation} = props;

    const handleBackClick = useCallback(()=>{
        if (onBackNavigation){
            onBackNavigation();
        }
    }, [onBackNavigation]);

    return (
        <>
            <div className="heading-wrapper">
                <div className="heading-title-with-navigation">
                    { onBackNavigation && <TooltipComponent tooltip={"Go back"}>
                                        <span className="form-go-back" onClick={handleBackClick}>
                                            {/*<ArrowBackIosIcon className="navigate-back-icon"/>&nbsp;*/}
                                        </span>
                    </TooltipComponent> }
                    <div className="heading-title">
                        {title}
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeadingComponent;