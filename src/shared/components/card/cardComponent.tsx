import "./cardComponent.scss";

interface CardComponentProps {
    className?: string;
}

const CardComponent = (props: React.PropsWithChildren<CardComponentProps>) => {

    const {className, children} = props;

    return (
        <div className={`card-component ${className}`}>
            {children}
        </div>
    );
};

export default CardComponent;