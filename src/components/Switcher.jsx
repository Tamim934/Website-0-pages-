import React, {useState} from 'react'
import UseDarkSide from "../hooks/UseDarkSide"
import {DarkModeSwitch} from 'react-toggle-dark-mode'

export default function Switcher() {
    const [colorTheme, setTheme] = UseDarkSide()
    const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false)

    const toggleDarkMode = (checked) => {
        setTheme(colorTheme)
        setDarkSide(checked)
    }

    return(
        <>
          <div className="m-16 flex flex-col items-center">
          <DarkModeSwitch
    checked={darkSide}
    onChange={toggleDarkMode}
    size={25}
    sunColor="orange"
    moonColor="purple"
/>


          </div>
        </>
    )
}