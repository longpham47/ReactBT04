import React, { Component } from 'react'
import FormMovie from './FormMovie'
import GheMovie from './GheMovie'

export default class Movie extends Component {
  render() {
    return (
      <div className='Movie'>
        <GheMovie/>
            <div className='form'>
                            <FormMovie/>
                    </div>
      </div>
    )
  }
}
