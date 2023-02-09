import React, {ReactFragment} from 'react';
// import Tooltip from '@mui/material/Tooltip';

interface TooltipComponentProps {
    tooltip: string | ReactFragment;
    arrow?: boolean;
    placement?: 'bottom-end' | 'bottom-start' | 'bottom' | 'left-end' | 'left-start' | 'left' | 'right-end' | 'right-start' | 'right' | 'top-end' | 'top-start' | 'top';
    handleOpen?: Function;
    handleClose?: Function;
    enterDelay?: number;
    leaveDelay?: number;
}

const TooltipComponent = (props: React.PropsWithChildren<TooltipComponentProps>) => {
    //
    // const {tooltip, arrow, enterDelay, leaveDelay, handleOpen, handleClose, children} = props;
    //
    // let {placement} = props;
    //
    // if (!placement) {
    //     placement = "top";
    // }
    //
    // const onOpen = (e: any) => {
    //     if (handleOpen) {
    //         handleOpen(e);
    //     }
    // }
    //
    // const onClose = (e: any) => {
    //     if (handleClose) {
    //         handleClose(e);
    //     }
    // }

    return (
        <div>
            TooltipComponent
        </div>
    );

};

export default TooltipComponent;
