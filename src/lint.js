import isNil from 'lodash/isNil'
import linterModule from 'eslint/lib/linter/linter'

import defaultEslintConfig from '../assets/json/eslint.json'

const Pos = CodeMirror.Pos
const linter = new linterModule.Linter()

function validator(text, options) {
  const result = []
  if (!text) return result

  const wrappedText = `async () => {\n${text}\n}`
  const config = defaultEslintConfig
  const errors = linter.verify(wrappedText, {
    ...config,
  })
  for (let i = 0; i < errors.length; i++) {
    const error = errors[i]

    result.push({
      message: error.message,
      severity: getSeverity(error),
      from: Pos(error.line - 1 - 1, error.column - 1),
      to: Pos(
        isNil(error.endLine) ? error.line - 1 - 1 : error.endLine - 1 - 1,
        isNil(error.endColumn) ? error.column : error.endColumn - 1,
      ),
    })
  }

  return result
}

CodeMirror.registerHelper('lint', 'javascript', validator)

function getSeverity(error) {
  switch (error.severity) {
    case 1:
      return 'warning'
    case 2:
    default:
      return 'error'
  }
}
