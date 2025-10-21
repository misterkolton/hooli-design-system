import { css } from '@emotion/react'
import { NavigationEntity } from 'src/theme/theming/entities'

export default {
  sideNav: (navigationEntity: NavigationEntity) => css`
    width: 50px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0%;
    z-index: 5;
    background-color: white;
    background: ${navigationEntity.backgroundColor};
    border: ${navigationEntity.border} solid ${navigationEntity.borderColor};
  `,
  sideNavContent: css`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    overflow-y: auto;
  `,
  logoContainer: css`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    flex-direction: column;
  `,
  contentContainer: css`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    height: calc(100% - 172px);
    justify-content: center;
  `,
  separatorContainer: css`
    padding: 0px 8px;
  `,
  userContainer: css`
    position: relative;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    padding-left: 8px;
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    z-index: 5;
  `,
  toggleContainer: css`
    padding: 8px;
  `,
  switchContainer: css``,
  linkContainer: css``,
  link: css`
    &:hover {
      ~ div {
        opacity: 1;
      }
    }
  `,
  tooltipContainer: css`
    opacity: 0;
    display: flex;
    transition: 0.3s;
    position: absolute;
    left: 115%;
    width: auto;
    justify-content: center;
    align-items: center;
  `,
}
