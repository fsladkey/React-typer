React Typing.io style component. Takes a block of text and a callback.

```js
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
```
