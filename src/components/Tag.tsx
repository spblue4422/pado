import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

export interface TagProps extends React.ComponentPropsWithoutRef<'div'> {
    backgroundColor: React.CSSProperties['backgroundColor'];
    color: React.CSSProperties['color'];
    border: boolean;
    borderColor: React.CSSProperties['color'];
}

interface TagWrapperProps extends TagProps {}

const TagWrapper = styled.div<TagWrapperProps>`
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.color};
    border-width: ${(props) => (props.border ? '2px' : '0px')};
    border-color: ${(props) => props.borderColor};
    border-radius: 25%;
`;

export const Tag = React.forwardRef<HTMLDivElement, TagProps>(
    ({ backgroundColor, color, border, borderColor, children, ...props }, ref) => {
        return (
            <TagWrapper
                backgroundColor={backgroundColor}
                color={color}
                border={border}
                borderColor={borderColor}
                {...props}
            >
                {children}
            </TagWrapper>
        );
    }
);
