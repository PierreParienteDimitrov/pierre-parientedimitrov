import { Switch } from '@headlessui/react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import MediaQuery from '@/utils/mediaQuery'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Toggle() {
  const [enabled, setEnabled] = useState(false)
  const [mounted, setMounted] = useState(false)

  const { theme, setTheme } = useTheme()

  const screenSize = MediaQuery()
  const { isTabletOrMobile } = screenSize

  const onToggle = () => {
    setEnabled(enabled === true ? false : true)
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    setMounted(true)

    console.log(theme)

    if (theme === 'system' || theme === 'dark') {
      setEnabled(true)
      setTheme('dark')
    }

    // setEnabled(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Switch.Group
      as="div"
      className="flex flex-col md:flex-row md:items-center"
    >
      <Switch
        checked={enabled}
        onChange={onToggle}
        className={classNames(
          enabled ? 'bg-indigo-600' : 'bg-gray-200',
          'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2'
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            enabled ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
          )}
        />
      </Switch>
      {!isTabletOrMobile && (
        <Switch.Label as="span" className="ml-3 text-sm">
          <span className="font-medium text-gray-900 dark:text-gray-100">
            {theme === 'dark' ? 'dark mode on' : 'dark mode off'}
          </span>
        </Switch.Label>
      )}
    </Switch.Group>
  )
}
