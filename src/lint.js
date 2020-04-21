import linterModule from 'eslint/lib/linter/linter'

import defaultConfig from '../assets/json/eslint.json'

const linter = new linterModule.Linter()

function validator(text, options) {
  const [result = [], config = defaultConfig] = []

  const errors = linter.verify(text, config)
  for (let i = 0; i < errors.length; i++) {
    const error = errors[i]

    result.push({
      message: error.message,
      to: getPos(error, false),
      from: getPos(error, true),
      severity: getSeverity(error),
    })
  }

  return result
}

CodeMirror.registerHelper('lint', 'javascript', validator)

function getPos(error, from) {
  const line = error.line - 1
  const ch = from ? error.column : error.column + 1

  if (error.node && error.node.loc) {
    line = from ? error.node.loc.start.line - 1 : error.node.loc.end.line - 1
    ch = from ? error.node.loc.start.column : error.node.loc.end.column
  }

  return CodeMirror.Pos(line, ch)
}

function getSeverity(error) {
  switch (error.severity) {
    case 1:
      return 'warning'
    case 2:
    default:
      return 'error'
  }
}
