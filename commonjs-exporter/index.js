module.exports = function({ types: t }) {
  const exportStatement = t.assignmentExpression(
    '=',
    t.memberExpression(
      t.identifier('module'),
      t.identifier('exports')
    ),
    t.identifier('Peppermint')
  )
  return {
    visitor: {
      Program(path) {
        path.pushContainer('body', exportStatement)
      }
    }
  }
}
