import {createUseStyles} from 'react-jss'

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
    }
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  },
  btn: {
    padding: '.5em 1em',
    borderRadius: '1em',
    cursor: 'pointer',
    background: '#ff69b4',
    border: 'none',
    color: '#fff',
    transition: 'background-color .2s, filter .2s',

    '&:hover':{
      background: '#663399'
    }
  },
  btnSec:{
    extend: 'btn',
    background: 'transparent',
    color: '#000',
    boxShadow: '0 0 0 2.2px inset #000',
    transition: 'background-color .2s, color .2s, opacity .2s',
    '&:hover':{
      background: '#000',
      color: '#fff'
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
  }
})
