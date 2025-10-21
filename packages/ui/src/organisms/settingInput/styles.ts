import { css } from '@emotion/react'

export default {
  fillRuleWrapper: css`
    position: relative;
    background: #d4d4d4;
    cursor: pointer;
    ::before {
      content: '';
      position: absolute;
      width: 50%;
      height: 50%;
      background: #a1a1a1;
      top: 0;
      left: 0;
      border-radius: 50px 0 0 0;
    }
    ::after {
      content: '';
      position: absolute;
      width: 50%;
      height: 50%;
      background: #a1a1a1;
      bottom: 0;
      right: 0;
      border-radius: 0 0 50px 0;
    }
  `,
}
