import './button.css'

export const createButton = ({
  style = 'filled',
  size = 'small',
  label
}) => {
  const button = document.createElement('button')
  button.type = 'submit'
  button.role = 'button'
  button.innerHTML = label
  button.className = [
    'button',
    `button--${size}`,
    `button--${style}`,
  ].join(' ')

  return button
}