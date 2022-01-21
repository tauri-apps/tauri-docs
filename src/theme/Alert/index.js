import React from 'react'

const types = {
  primary: "",
  secondary: "",
  success: "check-circle-fill",
  info: "info-circle-fill",
  warning: "exclamation-circle-fill",
  danger: "x-octagon-fill"
}

export default ({ type = 'info', title, children }) => (
  <div class={`alert alert--${type}`} role="alert">
    <strong>
      <i class={`bi bi-${types[type]}`}/> {title}
    </strong>
    <div>
      {children}
    </div>
  </div>
)
