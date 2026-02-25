

const NavBar = () => {

    const menuItems=[
        {
            name:'Home',
            link:'/'
        },
        {
            name:'Works',
            link:'/works'
        },
        {
            name:'About',
            link:'/about'
        },
        {
            name:'Projects',
            link:'/projects'
        }
    ]

  return (
    <div className='flex justify-between items-center px-15 py-3 '>
        <p className='text-4xl font-bold font-pacifico'>Joyal.</p>
      <ul className='flex gap-15'>
        {menuItems.map((item,index)=>(
            <li key={index} className='font-bold text-xl'>
               {item.name}
            </li>
        ))}
      </ul>
        <button className='bg-black cursor-pointer text-white py-4 px-8 rounded-full font-bold'>
            Contact
        </button>
    </div>
  )
}

export default NavBar