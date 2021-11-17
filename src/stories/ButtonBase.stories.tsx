import { Story } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';

import { ButtonBase, ButtonBaseProps } from '@src/components/ButtonBase';

const Layout = styled.div`
    display: flex;
    margin-top: 6px;
`;

const Item = styled.div`
    margin-right: 8px;
`;

export const Gallery: Story = () => {
    return (
        <Layout>
            <Item>
                <ButtonBase disabled={true}>Push</ButtonBase>
            </Item>
            <Item>
                <ButtonBase disabled={false}>Push</ButtonBase>
            </Item>
        </Layout>
    );
};

export const Template: Story<ButtonBaseProps> = (args) => {
    return <ButtonBase {...args}>{args.children}</ButtonBase>;
};

Template.args = {
    disabled: true,
    children: 'push'
};

export default {
    title: 'components/ButtonBase',
    components: ButtonBase
};
