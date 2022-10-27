import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { BaseLayout } from 'components/layout/BaseLayout'
import { Top } from 'pages/Top'

import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'

import { GlobalStyle } from 'styles/GlobalStyle'
import 'styles/reset.css'

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BaseLayout>
          <Routes>
            <Route path='/' element={<Top />} />
          </Routes>
        </BaseLayout>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
