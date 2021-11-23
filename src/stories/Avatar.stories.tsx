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
                    <Avatar figure={shape} size={'60px'} backgroundColor={oc.gray[1]}></Avatar>
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
    size: '60px',
    backgroundColor: oc.gray[1]
};

export default {
    title: 'components/Avatar',
    components: Avatar
};
