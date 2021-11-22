import React from 'react';
import { Story } from '@storybook/react';
import styled from 'styled-components';
import oc from 'open-color';

import { Tag, TagProps } from '@src/components/Tag';

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
            <Item id={`normal`}>
                <Tag backgroundColor={oc.gray[4]} color={oc.gray[8]}>
                    normal
                </Tag>
            </Item>
            <Item id={`ocean`}>
                <Tag backgroundColor={oc.cyan[1]} color={oc.cyan[7]}>
                    ocean
                </Tag>
            </Item>
            <Item id={'ocean-R'}>
                <Tag backgroundColor={oc.cyan[6]} color={oc.cyan[0]}>
                    ocean-R
                </Tag>
            </Item>
        </Layout>
    );
};

export const Template: Story<TagProps> = (args) => {
    return <Tag {...args}>{args.children}</Tag>;
};

Template.args = {
    backgroundColor: oc.cyan[1],
    color: oc.cyan[7],
    children: 'tag'
};

export default {
    title: 'components/Tag',
    components: Tag
};
