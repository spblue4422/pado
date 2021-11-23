import React from 'react';
import { Story } from '@storybook/react';
import styled from 'styled-components';
import oc from 'open-color';

import { Card, CardProps, CardVariant } from '@src/components/Card';

const Layout = styled.div`
    display: flex;
    margin-top: 6px;
`;

const Item = styled.div`
    margin-right: 8px;
`;

export const Gallery: Story = () => {
    const variants: CardVariant[] = [
        'white',
        'ocean',
        'yellow',
        'blue',
        'purple',
        'green',
        'black'
    ];
    return (
        <Layout>
            {variants.map((variant, idx) => (
                <Item key={`${idx}-1`}>
                    <Card width={'60px'} height={'50px'} borderRadius={'angled'} variant={variant}>
                        Angled
                        <br />
                        Card
                    </Card>
                </Item>
            ))}
            {variants.map((variant, idx) => (
                <Item key={`${idx}-1`}>
                    <Card width={'60px'} height={'50px'} borderRadius={'round'} variant={variant}>
                        Round
                        <br />
                        Card
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
    width: '60px',
    height: '50px',
    borderRadius: 'angled',
    variant: 'ocean',
    children: <>Angled<br/>Card</>
};

export default {
    title: 'components/Card',
    components: Card
};
