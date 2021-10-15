import React from 'react';
import { ButtonBase, ButtonBaseProps } from './ButtonBase';
import styled from 'styled-components';

export type ButtonVariant = 'default' | 'primary' | 'secondary' | 'tertiary';

interface VariantStyle {
    backgroundColor: React.CSSProperties['backgroundColor'];
    hoverColor: React.CSSProperties['backgroundColor'];
    activeColor: React.CSSProperties['backgroundColor'];
    color: React.CSSProperties['color'];
}

const ButtonVariantMap: Record<ButtonVariant, VariantStyle> = {
    default: {
        backgroundColor: '',
        hoverColor: '',
        activeColor: '',
        color: ''
    },
    primary: {
        backgroundColor: '',
        hoverColor: '',
        activeColor: '',
        color: ''
    },
    secondary: {
        backgroundColor: '',
        hoverColor: '',
        activeColor: '',
        color: ''
    },
    tertiary: {
        backgroundColor: '',
        hoverColor: '',
        activeColor: '',
        color: ''
    }
};

interface ButtonWrapperProps extends Omit<ButtonProps, 'variant'> {
    theme: VariantStyle;
}

const ButtonWrapper = styled(ButtonBase)<ButtonWrapperProps>``;

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
