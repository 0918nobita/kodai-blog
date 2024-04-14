import { globalStyle, style } from '@vanilla-extract/css';

import { layout } from '../layer.css';

export const main = style({
    display: 'flex',
    flexDirection: 'row',

    '@media': {
        '(max-width: 750px)': {
            flexDirection: 'column',
        },
    },
});

export const sidebar = style({
    '@layer': {
        [layout]: {
            '@media': {
                '(max-width: 750px)': {
                    display: 'none',
                },
            },
        },
    },
});

export const spHeader = style({
    display: 'none',

    '@media': {
        '(max-width: 750px)': {
            display: 'flex',
        },
    },
});

export const articleWrapper = style({
    flex: '1',
    height: '100vh',
    overflowY: 'auto',

    '@media': {
        '(max-width: 750px)': {
            height: 'fit-content',
            overflowY: 'visible',
        },
    },
});

export const article = style({
    padding: '1rem 2rem 5rem 2rem',
    maxWidth: '970px',
    width: '100%',
    margin: '0 auto',

    '@media': {
        '(max-width: 750px)': {
            padding: '0 1rem 3rem 1rem',
        },
    },
});

globalStyle(`${article} ul`, {
    '@media': {
        '(max-width: 750px)': {
            paddingLeft: '20px',
        },
    },
});
