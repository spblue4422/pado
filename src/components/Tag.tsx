import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

export interface TagProps extends React.ComponentPropsWithoutRef<'div'> {
    backgroundColor: React.CSSProperties['backgroundColor'];
    color: React.CSSProperties['color'];
    size: React.CSSProperties['fontSize'];
    border: boolean;
    borderColor: React.CSSProperties['color'];
}

interface TagWrapperProps extends TagProps {}

const TagWrapper = styled.div<TagWrapperProps>`
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.color};
    font-size: ${(props) => props.size};
    border-width: ${(props) => (props.border ? '2px' : '0px')};
    bordercolor: ${(props) => props.borderColor};
`;

const Tag = React.forwardRef<HTMLDivElement, TagProps>(
    ({ backgroundColor, color, size, border, borderColor, children, ...props }, ref) => {
        return (
            <TagWrapper
                backgroundColor={backgroundColor}
                color={color}
                size={size}
                border={border}
                borderColor={borderColor}
                {...props}
            >
                {children}
            </TagWrapper>
        );
    }
);
