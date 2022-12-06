import Loader from './loader'

class AppLoader extends Loader {
  constructor () {
    super('https://newsapi.org/v2/', {
      apiKey: '513b9a090b4b4072b59c5857cad729b2'
    })
  }
}

export default AppLoader
