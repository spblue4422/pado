import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

export interface TagProps extends React.ComponentPropsWithoutRef<'div'> {
    backgroundColor: React.CSSProperties['backgroundColor'];
    color: React.CSSProperties['color'];
}

interface TagWrapperProps extends TagProps {}

const TagWrapper = styled.div<TagWrapperProps>`
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.color};
    padding: 5px;
    border-radius: 10px;
    display: inline-block;
`;

export const Tag = React.forwardRef<HTMLDivElement, TagProps>(
    ({ backgroundColor, color, children, ...props }, ref) => {
        return (
            <TagWrapper backgroundColor={backgroundColor} color={color} {...props}>
                {children}
            </TagWrapper>
        );
    }
);
