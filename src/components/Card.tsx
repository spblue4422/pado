import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

export type Border = 'round' | 'angeld';

export type CardVariant =
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
    ocean: {
        backgroundColor: oc.cyan[2],
        color: oc.gray[9]
    },
    gray: {
        backgroundColor: oc.gray[4],
        color: oc.gray[9]
    },
    yellow: {
        backgroundColor: oc.yellow[2],
        color: oc.gray[9]
    },
    pink: {
        backgroundColor: oc.pink[2],
        color: oc.gray[9]
    },
    blue: {
        backgroundColor: oc.blue[2],
        color: oc.gray[9]
    },
    purple: {
        backgroundColor: oc.violet[3],
        color: oc.gray[9]
    },
    green: {
        backgroundColor: oc.green[3],
        color: oc.gray[9]
    },
    black: {
        backgroundColor: oc.gray[9],
        color: oc.gray[0]
    }
};

export interface CardProps extends React.ComponentPropsWithoutRef<'div'> {
    width: React.CSSProperties['width'];
    height: React.CSSProperties['height'];
    padding: React.CSSProperties['padding'];
    fontWeight: React.CSSProperties['fontWeight'];
    borderRadius: Border;
    variant: CardVariant;
}

interface CardWrapperProps extends Omit<CardProps, 'variant'> {
    theme: VariantStyle;
}

const CardWrapper = styled.div<CardWrapperProps>`
    width: ${(props) => props.width};
    heigth: ${(props) => props.height};
    padding: ${(props) => props.padding};
    font-weight: ${(props) => props.fontWeight};
    border-radius: ${(props) => (props.borderRadius === 'round' ? '10px' : '0px')}
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.color};
`;

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ width, height, padding, fontWeight, borderRadius, variant, children, ...props }, ref) => {
        const theme = CardVariantMap[variant];
        return (
            <CardWrapper
                width={width}
                height={height}
                padding={padding}
                fontWeight={fontWeight}
                borderRadius={borderRadius}
                theme={theme}
                ref={ref}
            >
                {children}
            </CardWrapper>
        );
    }
);
