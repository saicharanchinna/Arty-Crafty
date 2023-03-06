import "./dialogComponent.scss";
import Slide from '@mui/material/Slide';
import {TransitionProps} from "@mui/material/transitions";
import * as React from 'react';
import {useCallback} from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Dialog from '@mui/material/Dialog';
import CancelIcon from '@mui/icons-material/Cancel';
import ButtonComponent from "../button/ButtonComponent";
import TooltipComponent from "../../tooltip/tooltipComponent";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    let direction = 'down';
    const classBits = props?.className?.split('direction-');
    if (classBits && classBits?.length > 0 && classBits[1] !== "undefined") {
        direction = classBits[1];
    }
    // @ts-ignore
    return <Slide direction={direction} ref={ref} {...props} />;
});

interface DialogComponentProps {
    open: boolean;
    className?: string;
    onClose?: Function;
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
    disableEscKeyClose?: boolean;
    disableBackdropClose?: boolean;
    fullWidth?: boolean;
    direction?: "up" | "down" | "left" | "right";
    title?: string;
    description?: string;
    isShowCancel?: boolean;
}

const DialogComponent = (props: React.PropsWithChildren<DialogComponentProps>) => {

    const {open, onClose, className, children, title, description, isShowCancel} = props;
    let {maxWidth, disableEscKeyClose, disableBackdropClose, direction, fullWidth} = props;
    if (!maxWidth) maxWidth = 'sm';
    if (!direction) direction = 'down';
    if (!fullWidth) fullWidth = true;
    if (!disableEscKeyClose) disableEscKeyClose = false;
    if (!disableBackdropClose) disableBackdropClose = false;

    const handleOnClose = useCallback(() => {
        if (onClose) {
            onClose();
        }
    }, [onClose]);

    return (
        <Dialog
            open={open}
            disableEscapeKeyDown={disableEscKeyClose}
            TransitionProps={{
                className: "direction-" + direction
            }}
            onClose={(reason) => {
                if (reason && reason === "backdropClick" && disableBackdropClose) {
                    return;
                }
            }}
            TransitionComponent={Transition}
            keepMounted
            maxWidth={maxWidth}
            fullWidth={fullWidth}
            className={`dialog-container ${className}`}
        >
            {(title || isShowCancel) && <DialogTitle className="dialog-title">
                <div className="d-flex justify-content-space-between">
                    {title && title?.length >46 ? <TooltipComponent
                        placement={'top'}
                        tooltip={title}
                        arrow={true}>
                        <div className={'dialog-title-wrapper'}>{title}</div>
                    </TooltipComponent>:
                        <>{title}</>
                    }
                    {isShowCancel && <div>
                        <ButtonComponent
                            variant={'icon'}
                            color={"secondary"}
                            handleClick={handleOnClose}>
                            <CancelIcon/>
                        </ButtonComponent>
                    </div>}
                </div>
            </DialogTitle>}

            {description && <div className="dialog-description">{description}</div>}
            <DialogContent className="dialog-content-wrapper">
                {children}
            </DialogContent>
        </Dialog>
    );
};

export default DialogComponent;

