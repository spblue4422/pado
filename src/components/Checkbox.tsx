import React, { useState } from 'react';
import styled from 'styled-components';
import oc from 'open-color';

export type CheckboxVariant = 'normal' | 'ocean' | 'blue' | 'purple' | 'red' | 'green' | 'yellow';

interface VariantStyle {
    boxColor: React.CSSProperties['backgroundColor'];
    hoverColor: React.CSSProperties['backgroundColor'];
    focusColor: React.CSSProperties['backgroundColor'];
}

const CheckboxVariantMap: Record<CheckboxVariant, VariantStyle> = {
    normal: {
        boxColor: oc.gray[0],
        hoverColor: oc.gray[2],
        focusColor: oc.gray[4]
    },
    ocean: {
        boxColor: oc.cyan[2],
        hoverColor: oc.cyan[3],
        focusColor: oc.cyan[5]
    },
    blue: {
        boxColor: oc.blue[2],
        hoverColor: oc.blue[3],
        focusColor: oc.blue[4]
    },
    purple: {
        boxColor: oc.violet[2],
        hoverColor: oc.violet[3],
        focusColor: oc.violet[4]
    },
    red: {
        boxColor: oc.red[2],
        hoverColor: oc.red[3],
        focusColor: oc.red[4]
    },
    green: {
        boxColor: oc.green[2],
        hoverColor: oc.green[3],
        focusColor: oc.green[5]
    },
    yellow: {
        boxColor: oc.yellow[2],
        hoverColor: oc.yellow[3],
        focusColor: oc.yellow[5]
    }
};

export interface CheckboxProps extends React.ComponentPropsWithoutRef<'input'> {
    isChecked: boolean;
    isDisabled: boolean;
    isDefaultChecked: boolean;
    variant: CheckboxVariant;
}

interface CustomCheckboxProps
    extends Omit<CheckboxProps, 'variant' | 'isDisabled' | 'isDefaultChecked'> {
    theme: VariantStyle;
}

const CheckboxWrapper = styled.div`
    color: ${(props) => props.color};
`;

const CheckboxLabel = styled.label`
    color: ${oc.gray[9]};
    font-weight: noraml;
    font-size: 12px;
    display: flex;
    text-align: center;
`;

//display: none 으로 바꿔도될지 생각해보장
const DefaultCheckbox = styled.input.attrs({ type: 'checkbox' })`
    border: none;
    height: 1px;
    width: 1px;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    overflow: hidden;
    visiblity: hidden;
`;

const CustomCheckbox = styled.div<CustomCheckboxProps>`
    display: inline-block;
    width: 15px;
    height: 15px;
    background-color: ${(props) => (props.isChecked ? props.theme.boxColor : oc.gray[0])};
    border-radius: 2px;

    ${DefaultCheckbox}:disabled+& {
        filter: blur(0.7);
        background-color: ${oc.gray[0]};
    }

    ${DefaultCheckbox}:focus+& {
        background-color: ${(props) =>
            props.isChecked ? props.theme.boxColor : props.theme.focusColor};
    }

    &:hover {
        background-color: ${(props) =>
            props.isChecked ? props.theme.boxColor : props.theme.hoverColor};
    }
`;

const CheckImg = styled.svg`
    fill: none;
    stroke: white;
    stroke-width: 1px;
`;

//label 추가해줘야함.
export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
    (
        { isDisabled = false, isDefaultChecked = false, variant = 'ocean', children, ...props },
        ref
    ) => {
        const theme = CheckboxVariantMap[variant];
        const [isChecked, setIsChecked] = useState<boolean>(isDefaultChecked);
        const handleChkEvent = () => {
            setIsChecked(!isChecked);
        };

        return (
            <CheckboxWrapper {...props}>
                <CheckboxLabel>
                    <DefaultCheckbox
                        disabled={isDisabled}
                        checked={isChecked}
                        onClick={handleChkEvent}
                    ></DefaultCheckbox>
                    <CustomCheckbox isChecked={isChecked} theme={theme} ref={ref}>
                        <CheckImg viewBox="0 0 30 30">
                            <polyline points="4 18 12 27 26 4" />
                        </CheckImg>
                    </CustomCheckbox>
                    {children}
                </CheckboxLabel>
            </CheckboxWrapper>
        );
    }
);
