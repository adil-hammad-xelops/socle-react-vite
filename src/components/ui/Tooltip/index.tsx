import {Tooltip as MuiTooltip, type TooltipProps} from '@mui/material';
import type {ReactElement} from 'react';

interface AppTooltipProps extends Omit<TooltipProps, 'title'> {
    title: ReactElement | string;
    children: ReactElement;
}

const Tooltip = ({title, children, arrow = true, ...rest}: AppTooltipProps) => {
    return (
        <MuiTooltip title={title} arrow={arrow} {...rest}>
            <span style={{display: 'inline-flex'}}>{children}</span>
        </MuiTooltip>
    );
};

export default Tooltip;

