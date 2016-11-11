import React from 'react'
import ReactDOM from 'react-dom'
import TypeRacer from './TypeRacer'

const root = document.getElementById('content')
const text = `
class Cat
  attr_accessor :name

  def initialize(name)
    @name = name
  end

end
`

ReactDOM.render(<TypeRacer text={ text } callback={ console.log } />, root)
