import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

export type Border = 'round' | 'angled';

export type CardVariant = 'white' | 'ocean' | 'yellow' | 'blue' | 'purple' | 'green' | 'black';

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
    yellow: {
        backgroundColor: oc.yellow[2],
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
    borderRadius: Border;
    variant: CardVariant;
}

interface CardWrapperProps extends Omit<CardProps, 'variant'> {
    theme: VariantStyle;
}

const CardWrapper = styled.div<CardWrapperProps>`
    width: ${(props) => props.width};
    heigth: ${(props) => props.height};
    padding: 5px;
    font-weight: normal;
    white-space: normal;
    border-radius: ${(props) => (props.borderRadius === 'round' ? '10px' : '0px')}
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.color};
`;

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ width, height, borderRadius, variant, children, ...props }, ref) => {
        const theme = CardVariantMap[variant];
        return (
            <CardWrapper
                width={width}
                height={height}
                borderRadius={borderRadius}
                theme={theme}
                ref={ref}
            >
                {children}
            </CardWrapper>
        );
    }
);
