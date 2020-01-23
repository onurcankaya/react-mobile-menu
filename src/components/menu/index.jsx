import React from 'react'
import './index.css'

class Menu extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isMenuOpen: false,
    }
  }

  toggleMenu = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen,
    })
  }

  render() {
    const { menuData } = this.props
    const { isMenuOpen } = this.state

    return (
      <div className="container">
        <div className={`icon ${isMenuOpen ? 'active' : ''}`} onClick={this.toggleMenu}>
          <div className="hamburger"></div>
        </div>

        {/* Topbar */}
        {menuData.length && (
          <nav className={`nav ${isMenuOpen ? 'show' : ''}`}>
            <ul className="menu-items">
              {menuData.map((item, index) => (
                <li key={index} className="menu-item">
                  <a href={item.url} className="menu-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    )
  }
}

export default Menu
