export default function Link({src, children, newTab}) { 
  const targetBlank = newTab ? '_blank' : '';

  return (
    <a href={src} target={targetBlank}>{children}</a>
  )
}