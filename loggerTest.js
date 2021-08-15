function createLogger(namespace) {
  function logger (message) {
    console.log( `[${namespace}]: ${message}`)
  } 

  return logger
}

const $log_info = createLogger('INFO')
const $log_error = createLogger('ERROR')
const $log_warn = createLogger('WARN')

$log_info('Bắt đầu chạy app')
