import {createUseStyles} from 'react-jss'

// you might never know when in the process
// black won't become #222
const colors = {
  black: '#000',
  white: '#fff',
  hotpink: '#ff69b4',
  rebeccapurple: '#663399'
}

export default createUseStyles({
  '@global': {
    body: {
      fontSize: '21px',
      fontFamily: 'sans-serif'
    },
    // basic style reset
    '*':{
      margin: '0',
      padding: '0',
      fontSize: 'inherit',
      boxSizing: 'border-box'
    },
    h1:{
      fontSize: '1.5em',
      marginBottom: '1em'
    }
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100vh',
    paddingTop: '4em'
  },
  counterContainer:{
    display: 'flex',
    alignItems: 'center'
  },
  btn: {
    padding: '.5em 1em',
    borderRadius: '1em',
    cursor: 'pointer',
    background: colors.hotpink,
    border: 'none',
    color: colors.white,
    transition: 'background-color .2s, filter .2s',

    '&:hover':{
      background: colors.rebeccapurple
    },
    '&:active':{
      outline: `2px solid ${colors.rebeccapurple}`
    }
  },
  btnSec:{
    extend: 'btn',
    background: 'transparent',
    color: colors.black,
    boxShadow: `0 0 0 2.2px inset ${colors.black}`,
    transition: 'background-color .2s, color .2s, opacity .2s',
    '&:hover':{
      background: colors.black,
      color: colors.white
    },
    '&:active':{
      outline: `2px solid ${colors.black}`
    }
  },
  btnDisabled: {
    extend: 'btn',
    filter: 'grayscale(1)',
    pointerEvents: 'none'
  },
  btnSecDisabled: {
    extend: 'btnSec',
    opacity: .5,
    pointerEvents: 'none'
  },
  count:{
    width: '7em',
    margin: '0 1em',
    textAlign: 'center'
  },
  result:{
    maxWidth: '30em',
    width: '100%',
    padding: '4em',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    // For loading animation
    '&::before':{
      content:'""',
      display: 'block',
      background: colors.white,
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      transform: 'translateX(-100%)',
      transition: 'transform .5s, box-shadow .2s .3s',
    }
  },
  loadingResult:{
    '&::before':{
      transitionDelay: '0s, 0s',
      boxShadow: '1em 0 1em -1em rgba(0,0,0,.5)',
      transform: 'translateX(-1em)',
    }
  },
  description:{
    margin: '.5em 0'
  }
})
