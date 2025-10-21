import { css } from '@emotion/react'

export default {
  wrapper: css`
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
    cursor: pointer;
    display: flex;
  `,
  container: css`
    position: absolute;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    overflow: hidden;
  `,
  upload: css`
    background: transparent;
    color: #eb417b;
    z-index: 1;
    top: 0;
    padding: 0 2rem;
  `,
  loading: css`
    background: #ff059f;
    color: white;
    z-index: 2;
    top: -100%;
    position: relative;
    padding: 0 2rem 0 3rem;
  `,
  loadingBar: css`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: white;
  `,
  done: css`
    background: #2abb8b;
    color: white;
    z-index: 3;
    top: -100%;
    padding: 0 2rem 0 3.5rem;
  `,
}
