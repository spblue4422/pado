import React from 'react';
import styled from 'styled-components';

interface ButtonBaseWrapperProps {
    disabled: boolean;
}

export interface ButtonBaseProps extends React.ComponentPropsWithoutRef<'button'> {
    disabled: boolean;
}

const ButtonBaseWrapper = styled.button<ButtonBaseWrapperProps>`
    display: inline-flex;
    align-items: center;
    padding: 0;
    border: 0;
    background-color: none;

    &:not(:disabled) {
        cursor: pointer;
    }
`;

export const ButtonBase = React.forwardRef<HTMLButtonElement, ButtonBaseProps>(
    ({ disabled, children, ...props }, ref) => {
        return (
            <ButtonBaseWrapper ref={ref} disabled={disabled} {...props}>
                {children}
            </ButtonBaseWrapper>
        );
    }
);
