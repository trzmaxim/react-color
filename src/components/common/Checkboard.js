'use strict' /* @flow */

import React from 'react'
import ReactCSS from 'reactcss'

export class Checkboard extends ReactCSS.Component {

  classes(): any {
    return {
      'default': {
        grid: {
          Absolute: '0 0 0 0',
          background: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEXm5ub///8xREvZAAAAEElEQVQI12Ng+M+AFeEQBgB+vw/xWs16mgAAAABJRU5ErkJggg==) center left'
        },
      },
    }
  }

  render(): any {
    return (
      <div is="grid" ref="grid"></div>
    )
  }

}

export default Checkboard
