import './button.css';

export const Button = ({
  primary = false,
  size = 'medium',
  // backgroundColor,
  label,
  onClick,
}) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  btn.addEventListener('click', onClick);

  const mode = primary ? 'fds-button--primary' : 'fds-button--secondary';
  btn.className = ['fds-button', `fds-button--${size}`, mode].join(' ');

  // btn.style.backgroundColor = backgroundColor;

  return btn;
};
