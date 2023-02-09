import './HowItWorksCardComponent.scss';

interface HowItWorksCardComponentProps {
    icon: any;
    title: string;
    description: string
}

const HowItWorksCardComponent = (props: HowItWorksCardComponentProps) => {

    const {icon, title, description} = props

    return (
        <div className="how-it-works-component card-container">
            <div className="card-icon">
                <img src={icon} alt="logo"/>
            </div>
            <div className="title">{title}</div>
            <div className="description">{description}</div>
        </div>
    )
};

export default HowItWorksCardComponent;