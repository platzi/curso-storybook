import './button.css'

export const createButton = ({
  style = 'outlined',
  size = 'small',
  label
}) => {
  const button = document.createElement('button')
  button.type = 'submit'
  button.role = 'button'
  button.innerHTML = label

  return button
}