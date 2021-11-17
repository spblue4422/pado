import React from 'react';
import { Story } from '@storybook/react';
import styled from 'styled-components';
import oc from 'open-color';

import { Card, CardProps, CardVariant, Border } from '@src/components/Card';

const Layout = styled.div`
    display: flex;
    margin-top: 6px;
`;

const Item = styled.div`
    margin-right: 8px;
`;

export const Gallery: Story = () => {
    //const borders: Border[] = ['round', 'angled'];
    const variants: CardVariant[] = [
        'white',
        'ocean',
        'black',
        'blue',
        'yellow',
        'green',
        'purple'
    ];
    return (
        <Layout>
            {variants.map((variant, idx) => (
                <Item key={`${idx}-1`}>
                    <Card width={'40px'} height={'20px'} borderRadius={'angled'} variant={variant}>
                        Angled
                    </Card>
                </Item>
            ))}
            {variants.map((variant, idx) => (
                <Item key={`${idx}-1`}>
                    <Card width={'40px'} height={'20px'} borderRadius={'round'} variant={variant}>
                        Round
                    </Card>
                </Item>
            ))}
        </Layout>
    );
};

export const Template: Story<CardProps> = (args) => {
    return <Card {...args}>{args.children}</Card>;
};

Template.args = {
    width: '40px',
    height: '20px',
    borderRadius: 'angled',
    variant: 'ocean'
};

export default {
    title: 'components/Card',
    components: Card
};
