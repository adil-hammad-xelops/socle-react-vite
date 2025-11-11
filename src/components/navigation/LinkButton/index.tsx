import {Button, type ButtonProps} from '@mui/material';


interface LinkButtonProps extends ButtonProps {
    href: string;
    target?: string;
    rel?: string;
}

const LinkButton = ({href, target = '_self', rel, ...rest}: LinkButtonProps) => {
    return (
        <Button component="a" href={href} target={target} rel={rel} {...rest} />
    );
};

export default LinkButton;

