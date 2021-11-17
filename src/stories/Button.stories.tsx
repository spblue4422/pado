import { Story } from '@storybook/react';
import React from 'react';
import styled, { StyledProps } from 'styled-components';

import { Button, ButtonProps, ButtonVariant } from '@src/components/Button';

const Layout = styled.div`
    display: flex;
    margin-top: 6px;
`;

const Item = styled.div`
    margin-right: 8px;
`;

export const Gallery: Story = () => {
    const variants: ButtonVariant[] = ['default', 'primary', 'secondary', 'tertiary'];
    return (
        <Layout>
            {variants.map((variant, idx) => (
                <Item key={`${idx}-1`}>
                    <Button fontWeight="normal" padding="3px" variant={variant} disabled={false}>
                        Push
                    </Button>
                </Item>
            ))}
            {variants.map((variant, idx) => (
                <Item key={`${idx}-2`}>
                    <Button fontWeight="normal" padding="3px" variant={variant} disabled={true}>
                        Push
                    </Button>
                </Item>
            ))}
        </Layout>
    );
};

export const Template: Story<ButtonProps> = (args) => {
    return <Button {...args}>{args.children}</Button>;
};

Template.args = {
    variant: 'default',
    padding: '3px',
    fontWeight: 'normal',
    children: 'push'
};

export default {
    title: 'components/Button',
    component: Button
};
