import './ProgressBarComponent.scss'
import React, {useEffect, useState} from 'react';

interface ProgressBarComponentProps {
    progress: number;
    progressIcon?: any;
    progressTitle?: string;
    progressDescription?: string;
}

const ProgressBarComponent = (props: ProgressBarComponentProps) => {

    const {progressIcon, progressTitle, progressDescription} = props;
    const [progress, setProgress] = useState<number>(props.progress);

    useEffect(() => {
        setProgress(Math.round(props.progress));
    }, [props.progress]);
    
    return (
        <div className="progress-bar-container">
            <div className="progress-bar-component component">
                {(progressIcon || progressTitle || progressDescription) &&
                <div className="progress-bar-label"
                     style={{left: `calc(${progress}% - (${75 - progress * 0.35}px))`}}>
                    {progressIcon && <div className="card-icon">{progressIcon}</div>}
                    {progressTitle && <div className="card-title">{progressTitle}</div>}
                    {progressDescription && <div className="card-description">{progressDescription}</div>}
                </div>
                }
                <div className="progress-bar-filled"
                     style={{width: progress + "%"}}>
                    <div className="progress-bar-percentage-badge">
                        {progress}%
                    </div>
                </div>

            </div>
        </div>)
};

export default ProgressBarComponent;
