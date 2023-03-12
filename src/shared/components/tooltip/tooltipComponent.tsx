import React, {ReactFragment} from 'react';
import Tooltip from '@mui/material/Tooltip';

interface TooltipComponentProps {
    tooltip: string | ReactFragment| React.ReactNode;
    arrow?: boolean;
    placement?: 'bottom-end' | 'bottom-start' | 'bottom' | 'left-end' | 'left-start' | 'left' | 'right-end' | 'right-start' | 'right' | 'top-end' | 'top-start' | 'top';
    handleOpen?: Function;
    handleClose?: Function;
    enterDelay?: number;
    leaveDelay?: number;

}

const TooltipComponent = (props: React.PropsWithChildren<TooltipComponentProps>) => {

    const {tooltip, arrow, enterDelay, leaveDelay, handleOpen, handleClose, children} = props;
    let {placement} = props;

    if (!placement) {
        placement = "right";
    }

    const onOpen = (e: any) => {
        if (handleOpen) {
            handleOpen(e);
        }
    }

    const onClose = (e: any) => {
        if (handleClose) {
            handleClose(e);
        }
    }

    return (
        <Tooltip title={
            <React.Fragment>
                {tooltip}
            </React.Fragment>
        }
                 className={'tooltip-component'}
                 arrow={arrow}
                 placement={placement}
                 PopperProps={{
                     sx: {
                         "& .MuiTooltip-tooltip": {
                             padding: "10px",
                             backgroundColor: '#EEF4FF',
                             color:'#202020',
                             fontSize:'12px'
                         },
                         '& .MuiTooltip-arrow': {
                             color: '#EEF4FF',
                         }
                     }
                 }}
                 onOpen={onOpen}
                 onClose={onClose}
                 enterDelay={enterDelay}
                 leaveDelay={leaveDelay}
        >
           <>{children}</>
        </Tooltip>
    );

};

export default TooltipComponent;
