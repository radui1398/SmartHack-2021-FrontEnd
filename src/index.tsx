import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { initializeStore } from './store'
import { Provider } from 'react-redux'
import swal from 'sweetalert2'
import { HttpApiService } from './services/HttpApiService'
import { Context } from './Context'

const store = initializeStore()

Context.initialize({
  alertService: swal,
  apiService: new HttpApiService(),
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
