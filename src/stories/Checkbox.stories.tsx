import { Story } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import { Checkbox, CheckboxProps, CheckboxVariant } from '@src/components/Checkbox';

const Layout = styled.div`
    display: flex;
    margin-top: 6px;
`;

const Item = styled.div`
    margin-right: 8px;
`;

export const Gallery: Story = () => {
    const variants: CheckboxVariant[] = [
        'normal',
        'ocean',
        'blue',
        'green',
        'purple',
        'red',
        'yellow'
    ];

    return (
        <Layout>
            {variants.map((variant, idx) => (
                <Item key={`${idx}-1`}>
                    <Checkbox
                        isChecked={false}
                        isDisabled={false}
                        isDefaultChecked={false}
                        variant={variant}
                    >
                        checkbox
                    </Checkbox>
                </Item>
            ))}
            {variants.map((variant, idx) => (
                <Item key={`${idx}-2`}>
                    <Checkbox
                        isChecked={false}
                        isDisabled={true}
                        isDefaultChecked={false}
                        variant={variant}
                    >
                        checkbox
                    </Checkbox>
                </Item>
            ))}
        </Layout>
    );
};

export const Template: Story<CheckboxProps> = (args) => {
    return <Checkbox {...args}>{args.children}</Checkbox>;
};

Template.args = {
    isDisabled: false,
    isDefaultChecked: true,
    variant: 'ocean',
    children: 'checkbox'
};

export default {
    title: 'components/Checkbox',
    components: Checkbox
};
