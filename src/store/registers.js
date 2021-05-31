import { reactive } from 'vue'

let initialRegisterState = []
const load = function () {
  const configs = localStorage.configs
  if (configs) {
    initialRegisterState = JSON.parse(localStorage.getItem('registers'))
  }
}
load()

const registerState = reactive({ ...initialRegisterState })

const reset = function () {
	Object.assign(registerState, initialRegisterState)
}

export const registerStore = {
	state: registerState,
	reset
}