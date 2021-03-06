// vars

const tagOpts = {
  closingSlash: 'never',
  beforeSelfClosing: 'always',
  afterOpening: 'never',
  beforeClosing: 'never',
};

const wrapOpts = {
  declaration: 'parens-new-line',
  assignment: 'parens-new-line',
  return: 'parens-new-line',
  arrow: 'parens-new-line',
  condition: 'parens-new-line',
  logical: 'parens-new-line',
  prop: 'parens-new-line',
};

const sortProps = {
  ignoreCase: true,
  callbacksLast: true,
  shorthandFirst: true,
  reservedFirst: ['key', 'ref'],
};

// export

module.exports = {
  plugins: ['react'],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  settings: {
    react: {
      version: 'detect',
    },
  },

  rules: {
    'react/boolean-prop-naming': 0,
    'react/button-has-type': 1,
    'react/default-props-match-prop-types': 1,
    'react/destructuring-assignment': [1, 'always'],
    'react/display-name': 2,
    'react/forbid-component-props': 0,
    'react/forbid-dom-props': 0,
    'react/forbid-elements': 0,
    'react/forbid-foreign-prop-types': 1,
    'react/forbid-prop-types': [1, {forbid: ['any']}],
    'react/jsx-boolean-value': [1, 'never'],
    'react/jsx-child-element-spacing': 1,
    'react/jsx-closing-bracket-location': 1,
    'react/jsx-closing-tag-location': 1,
    'react/jsx-curly-brace-presence': [1, 'never'],
    'react/jsx-curly-newline': 1,
    'react/jsx-curly-spacing': [1, {when: 'never', allowMultiline: false}],
    'react/jsx-equals-spacing': [1, 'never'],
    'react/jsx-filename-extension': 0,
    'react/jsx-first-prop-new-line': [1, 'multiline'],
    'react/jsx-fragments': [1, 'syntax'],
    'react/jsx-handler-names': 0,
    'react/jsx-indent-props': [1, 2],
    'react/jsx-indent': [1, 2],
    'react/jsx-key': [1, {checkFragmentShorthand: true}],
    'react/jsx-max-depth': [1, {max: 15}],
    'react/jsx-max-props-per-line': [1, {maximum: 1, when: 'multiline'}],
    'react/jsx-no-bind': 1,
    'react/jsx-no-comment-textnodes': 1,
    'react/jsx-no-duplicate-props': 1,
    'react/jsx-no-literals': 0,
    'react/jsx-no-target-blank': 1,
    'react/jsx-no-undef': 2,
    'react/jsx-no-useless-fragment': 1,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-pascal-case': 1,
    'react/jsx-props-no-multi-spaces': 1,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-sort-default-props': [1, {ignoreCase: true}],
    'react/jsx-sort-props': [1, sortProps],
    'react/jsx-tag-spacing': [1, tagOpts],
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/jsx-wrap-multilines': [1, wrapOpts],
    'react/no-access-state-in-setstate': 2,
    'react/no-array-index-key': 0,
    'react/no-children-prop': 2,
    'react/no-danger-with-children': 2,
    'react/no-danger': 0,
    'react/no-deprecated': 2,
    'react/no-did-mount-set-state': 2,
    'react/no-did-update-set-state': 2,
    'react/no-direct-mutation-state': 2,
    'react/no-find-dom-node': 2,
    'react/no-is-mounted': 2,
    'react/no-multi-comp': [1, {ignoreStateless: true}],
    'react/no-redundant-should-component-update': 2,
    'react/no-render-return-value': 2,
    'react/no-set-state': 0,
    'react/no-string-refs': 2,
    'react/no-this-in-sfc': 2,
    'react/no-typos': 2,
    'react/no-unescaped-entities': 0,
    'react/no-unknown-property': 2,
    'react/no-unsafe': 2,
    'react/no-unused-prop-types': 1,
    'react/no-unused-state': 1,
    'react/no-will-update-set-state': 2,
    'react/prefer-es6-class': [1, 'never'],
    'react/prefer-read-only-props': 2,
    'react/prefer-stateless-function': 2,
    'react/prop-types': 1,
    'react/react-in-jsx-scope': 0,
    'react/require-default-props': 0,
    'react/require-optimization': 0,
    'react/require-render-return': 2,
    'react/self-closing-comp': [1, {component: true, html: true}],
    'react/sort-comp': 1,
    'react/sort-prop-types': [1, {sortShapeProp: true, ignoreCase: true}],
    'react/state-in-constructor': [2, 'never'],
    'react/static-property-placement': 1,
    'react/style-prop-object': 1,
    'react/void-dom-elements-no-children': 2,
  },
};
