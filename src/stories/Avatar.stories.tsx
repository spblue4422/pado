import { Story } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import { Avatar, AvatarProps, Figure } from '@src/components/Avatar';

const Layout = styled.div`
    display: flex;
    margin-top: 6px;
`;

const Item = styled.div`
    margin-right: 8px;
`;

export const Gallery: Story = () => {
    const shapes: Figure[] = ['circle', 'square'];

    return (
        <Layout>
            {shapes.map((shape, idx) => (
                <Item key={idx}>
                    <Avatar figure={shape} size={'20px'} backgroundColor={oc.white[0]}></Avatar>
                </Item>
            ))}
        </Layout>
    );
};

export const Template: Story<AvatarProps> = (args) => {
    return <Avatar {...args}></Avatar>;
};

Template.args = {
    figure: 'circle',
    size: '30px',
    backgroundColor: oc.gray[0]
};

export default {
    title: 'components/Avatar',
    components: Avatar
};
