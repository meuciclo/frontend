const initializeConfigs = () => {
  const initialConfigs = {
    name: '',
    regularMenstrualFlow: false,
    daysMenstrualFlow: '',
    tpmAlert: '',
    isCloud: false,
    firstMenstrualDay: '',
    avarageCycleTime: 30
  }
  console.log(initialConfigs)
  // localStorage.configs = JSON.stringify(initialConfigs)
}

const firstUse = () => {
  if (!localStorage.configs) {
    initializeConfigs()
  }
}

export default firstUse
