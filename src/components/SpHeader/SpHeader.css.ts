import { componentLayer } from '~/layer.css';
import { vars } from '~/theme.css';

export const header = componentLayer({
  display: 'flex',
  flexDirection: 'row',
  width: '100vw',
  height: '3rem',
  backgroundColor: vars.spHeader.background.default,
  color: vars.spHeader.foreground,
});

export const iconWrapper = componentLayer({
  height: '100%',
});

export const icon = componentLayer({
  height: '100%',
  width: 'auto',
});

export const navItem = componentLayer({
  display: 'grid',
  placeItems: 'center',
  paddingLeft: '0.5rem',
  paddingRight: '0.5rem',
  textDecoration: 'none',

  '@media': {
    '(hover: hover)': {
      ':hover': {
        backgroundColor: vars.spHeader.background.hovered,
      },
    },
  },
});
