import React from 'react';
import { ButtonBase, ButtonBaseProps } from './ButtonBase';
import styled from 'styled-components';
import oc from 'open-color';

export type ButtonVariant = 'default' | 'primary' | 'secondary' | 'tertiary';

interface VariantStyle {
    backgroundColor: React.CSSProperties['backgroundColor'];
    hoverColor: React.CSSProperties['backgroundColor'];
    activeColor: React.CSSProperties['backgroundColor'];
    color: React.CSSProperties['color'];
}

const ButtonVariantMap: Record<ButtonVariant, VariantStyle> = {
    default: {
        backgroundColor: oc.cyan[5],
        hoverColor: oc.cyan[7],
        activeColor: oc.cyan[9],
        color: oc.gray[0]
    },
    primary: {
        backgroundColor: oc.cyan[2],
        hoverColor: oc.cyan[3],
        activeColor: oc.cyan[4],
        color: oc.gray[0]
    },
    secondary: {
        backgroundColor: oc.gray[0],
        hoverColor: oc.gray[2],
        activeColor: oc.gray[4],
        color: oc.cyan[6]
    },
    tertiary: {
        backgroundColor: oc.gray[0],
        hoverColor: oc.gray[2],
        activeColor: oc.gray[4],
        color: oc.blue[6]
    }
};

interface ButtonWrapperProps extends Omit<ButtonProps, 'variant'> {
    theme: VariantStyle;
}

const ButtonWrapper = styled(ButtonBase)<ButtonWrapperProps>`
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.color};
    padding: ${(props) => props.padding};
    font-weight: ${(props) => props.fontWeight};
    border: none;
    border-radius: 3px;
    box-shadow: ${oc.gray[2]} 0px 1px 3px 0px;

    &:hover:not(:disabled) {
        background-color: ${(props) => props.theme.hoverColor};
    }

    &:active:not(:disabled) {
        background-color: ${(props) => props.theme.activeColor};
    }
    &:disabled {
        opacity: 0.3;
        filter: blur(0.3px);
    }
`;

export interface ButtonProps extends ButtonBaseProps {
    variant: ButtonVariant;
    padding: React.CSSProperties['padding'];
    fontWeight: React.CSSProperties['fontWeight']; //밑에 disabled가 있는거죵
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ variant, padding, fontWeight, children, ...props }, ref) => {
        const theme = ButtonVariantMap[variant];

        return (
            <ButtonWrapper
                ref={ref}
                theme={theme}
                padding={padding}
                fontWeight={fontWeight}
                {...props}
            >
                {children}
            </ButtonWrapper>
        );
    }
);
