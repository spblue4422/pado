import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

type CardVariant =
    | 'white'
    | 'ocean'
    | 'gray'
    | 'yellow'
    | 'pink'
    | 'blue'
    | 'purple'
    | 'green'
    | 'black';

interface VariantStyle {
    backgroundColor: React.CSSProperties['backgroundColor'];
    color: React.CSSProperties['color'];
}

const CardVariantMap: Record<CardVariant, VariantStyle> = {
    white: {
        backgroundColor: oc.gray[0],
        color: oc.gray[9]
    },
    ocean: {},
    gray: {},
    yellow: {},
    pink: {},
    blue: {},
    purple: {},
    green: {},
    black: {}
};

export interface CardProps {
    width: React.CSSProperties['width'];
    height: React.CSSProperties['height'];
    padding: React.CSSProperties['padding'];
    fontWeight: React.CSSProperties['fontWeight'];
}

export interface CardWrapperProps {
    theme: VariantStyle;
}

const CardWrapper = styled.div<CardWrapperProps>``;

export const Card = React.forwardRef<HTMLDivElement, CardProps>(({ children, ...props }, ref) => {
    return <CardWrapper ref={ref}>{children}</CardWrapper>;
});
