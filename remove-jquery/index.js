module.exports = function() {
  return {
    visitor: {
      IfStatement(path) {
        const test = path.get('test')
        if (test.node.type === 'MemberExpression') {
          if (test.node.object.name === 'window' && test.node.property.name === 'jQuery') {
            path.remove()
          }
        }
      }
    }
  }
}
