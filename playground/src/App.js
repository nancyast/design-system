import React from 'react'

import { Button, SecondaryButton, TeriButton } from 'design-system'

const App = () => {
  return (
    <div>
      <TeriButton>TeriButton</TeriButton>
      <Button>
        Create React Library Example <span>😄</span>
      </Button>
      <SecondaryButton>SecondaryButton</SecondaryButton>
    </div>
  )
}

export default App
