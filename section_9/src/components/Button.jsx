import './Button.css';

export default function Button({ children, alt = false, ...props }) {
  return (
    <button className={`button ${alt ? 'alt' : ''}`} {...props}>
      {children}
    </button>
  );
}
