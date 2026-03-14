import Button from 'react-bootstrap/Button';

export default function AppButton({ text, onClick, variant, ...props }) {
  return (
    <Button
      variant={variant || "primary"}
      onClick={onClick}
      {...props}
    >
      {text || "Sample Button"}
    </Button>
  )
}