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

const Gallery: Story = () => {
    const border: boolean[] = [true, false];

    return (
        <Layout>
            {border.map((tf, idx) => (
                <Item>
                    <Tag
                        backgroundColor={oc.gray[4]}
                        color={oc.gray[8]}
                        border={tf}
                        borderColor={oc.gray[9]}
                    >
                        normal
                    </Tag>
                </Item>
            ))}
            {border.map((tf, idx) => (
                <Item>
                    <Tag
                        backgroundColor={oc.cyan[1]}
                        color={oc.cyan[7]}
                        border={tf}
                        borderColor={oc.cyan[8]}
                    >
                        ocean
                    </Tag>
                </Item>
            ))}
            {
                <Item>
                    <Tag
                        backgroundColor={oc.cyan[6]}
                        color={oc.cyan[0]}
                        border={false}
                        borderColor={oc.cyan[6]}
                    >
                        ocean-R
                    </Tag>
                </Item>
            }
        </Layout>
    );
};

const Template: Story<TagProps> = (args) => {
    return <Tag {...args}>{args.children}</Tag>;
};

Template.args = {
    backgroundColor: oc.cyan[1],
    color: oc.cyan[7],
    border: true,
    borderColor: oc.cyan[8]
};

export default {
    title: 'components/Tag',
    components: Tag
};
