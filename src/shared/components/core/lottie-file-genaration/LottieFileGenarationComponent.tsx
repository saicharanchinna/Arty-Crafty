import './LottieFileGenarationComponent.scss'
import React from 'react';
import Lottie from "lottie-react";

interface LottieFileGenarationComponentProps {
    animationData?: any
    autoplay?: any
    loop?: any
}

const LottieFileGenarationComponent = (props: LottieFileGenarationComponentProps) => {
    const {animationData, autoplay, loop} = props
    return (
        <div>
            <Lottie
                animationData={animationData}
                loop={loop}
                autoplay={autoplay}/>;
        </div>
    )
};

export default LottieFileGenarationComponent;
