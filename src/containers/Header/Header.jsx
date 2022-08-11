import Link from '../../components/Link/Link';

const Header = () => {
  const menuItems = [
    {
      name: 'Google',
      src: 'https://www.google.com/'
    },
    {
      name: 'Youtube',
      src: 'https://www.youtube.com/'
    },
    {
      name: 'Facebook',
      src: 'https://www.fb.com/'
    },
  ]

  return (
    <header>
        <div>Logo</div>
        <div>
          {
            menuItems.map(item => (
              <Link 
                key={item.src} 
                src={item.src} 
                newTab={true}
              >
                {item.name}
              </Link>
            ))
          }
        </div>
      </header>
  )
}

export default Header