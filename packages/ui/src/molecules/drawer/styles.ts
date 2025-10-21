import { css } from '@emotion/react'
import { DrawerLocation } from './drawer'

export default {
  drawerContainer: (location: DrawerLocation) => css`
    display: flex;
    position: absolute;
    left: ${location === 'left' && 0};
    right: ${location === 'right' && 0};
    top: ${location !== 'bottom' && 0};
    bottom: ${location === 'bottom' && 0};
  `,
  childContainer: (shouldHideScroll?: boolean) => css`
    ::-webkit-scrollbar {
      width: ${shouldHideScroll ? '0px' : undefined};
      background: ${shouldHideScroll ? 'transparent' : undefined};
    }
    scrollbar-width: ${shouldHideScroll ? 'none' : 'initial'};
  `,
  drawerTab: (location: DrawerLocation, openValue: number) => css`
    display: flex;
    justify-content: center;
    align-content: center;
    align-self: center;
    align-items: center;
    position: absolute;
    left: ${location === 'left' && `${openValue}px`};
    right: ${location === 'right' && `${openValue}px`};
    top: ${location === 'top' && `${openValue}px`};
    bottom: ${location === 'bottom' && `${openValue}px`};
  `,
}
