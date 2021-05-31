import { reactive } from 'vue'

// States
const initialConfigState = {
  name: '',
  regularMenstrualFlow: false,
  daysMenstrualFlow: '',
  tpmAlert: '',
  isCloud: false,
  firstMenstrualDay: '',
  avarageCycleTime: 30
}

let loadedState = {}

const configState = reactive({ ...initialConfigState })

// Methods
const load = function () {
  const configs = localStorage.configs
  if (configs) {
    loadedState = JSON.parse(localStorage.getItem('configs'))
    Object.assign(configState, loadedState)
  }
}

const reset = function () {
  if (Object.keys(loadedState).length === 0) {
    Object.assign(configState, initialConfigState)
  } else {
    Object.assign(configState, loadedState)
  }
}

const save = function () {
  localStorage.configs = JSON.stringify(configState)
}

// Execs
load()

export const configStore = {
  state: configState,
  load,
  save,
  reset
}
