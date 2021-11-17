import React from 'react';
import styled from 'styled-components';

export type Figure = 'circle' | 'square';

interface AvatarWrapperProps extends Omit<AvatarProps, 'img'> {}

export interface AvatarProps extends React.ComponentPropsWithoutRef<'div'> {
    figure: Figure;
    size: React.CSSProperties['width'];
    backgroundColor: React.CSSProperties['backgroundColor'];
    img?: React.ReactElement;
}

const AvatarWrapper = styled.div<AvatarWrapperProps>`
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    border-radius: ${(props) => (props.figure === 'circle' ? '50%' : '0%')};
    background-color: ${(props) => props.backgroundColor};
    border: none;

    &:hover {
        border: 1px;
    }

    $:active {
        filter: brightness(0.7);
        border: 1px;
    }
`;

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
    ({ figure, size, backgroundColor, img, ...props }, ref) => {
        return (
            <AvatarWrapper
                ref={ref}
                figure={figure}
                size={size}
                backgroundColor={backgroundColor}
                {...props}
            >
                {img}
            </AvatarWrapper>
        );
    }
);
