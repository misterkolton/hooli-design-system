import { css } from '@emotion/react'
import { DirectionType } from './tooltip'

export default {
  tooltip: (
    direction: DirectionType,
    background: string,
    repositionTooltip: boolean | undefined,
  ) => css`
    transform: ${repositionTooltip ? 'translateY(-125%);' : null}
    position: relative;
    left: 0;
    background: ${background};
    :after,
    :before {
      right: ${direction === 'left' && '100%'};
      top: ${
        direction === 'right' || direction === 'left'
          ? '50%'
          : direction === 'bottom' && '100%'
      };
      bottom: ${direction === 'top' && '100%'};
      left: ${
        direction === 'top' || direction === 'bottom'
          ? '50%'
          : direction === 'right' && '100%'
      };
      border: solid transparent;
      content: ' ';
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
    }
    :after {
      border-color: rgba(254, 254, 254, 0);
      border-right-color: ${direction === 'left' && background};
      border-bottom-color: ${direction === 'top' && background};
      border-left-color: ${direction === 'right' && background};
      border-top-color: ${direction === 'bottom' && background};
      border-width: 8px;
      margin-top: ${direction === 'left' || direction === 'right' ? '-8px' : 0};
      margin-left: ${
        direction === 'top' || direction === 'bottom' ? '-8px' : 0
      };
    }
    :before {
      border-color: rgba(227, 230, 232, 0);
      border-right-color: ${direction === 'left' && background};
      border-bottom-color: ${direction === 'top' && background};
      border-left-color: ${direction === 'right' && background};
      border-top-color: ${direction === 'bottom' && background};

      border-width: 9px;
      margin-top: ${direction === 'left' || direction === 'right' ? '-9px' : 0};
      margin-left: ${
        direction === 'top' || direction === 'bottom' ? '-9px' : 0
      };
    }
  `,
}
