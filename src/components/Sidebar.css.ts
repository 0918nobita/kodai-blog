import { style } from '@vanilla-extract/css';

import { component } from '../layer.css';

export const nav = style({
    '@layer': {
        [component]: {
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'var(--sidebar-bg)',
            color: 'var(--sidebar-text)',
            width: '18rem',
            height: '100vh',
        },
    },
});

export const icon = style({});
