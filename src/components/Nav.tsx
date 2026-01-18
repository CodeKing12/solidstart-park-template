import { For } from 'solid-js'
import { css } from 'styled-system/css'
import { HStack } from 'styled-system/jsx'

const navLinks = [
  { label: 'About', href: '/about', active: false },
  { label: 'Services', href: '/services', active: false },
  { label: 'Pricing', href: '/pricing', active: false },
  { label: 'Insights', href: '/insights', active: false },
  { label: 'Contact', href: '/contact', active: false },
]

export const Nav = () => {
    return (
        <HStack as="nav" gap="8" display={{ base: 'none', lg: 'flex' }}>
            <For each={navLinks}>
              {(link) => (
                <a
                  href={link.href}
                  class={css({
                    fontSize: 'md',
                    fontWeight: '500',
                    color: 'brand.darkGreen',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                    _hover: { color: 'brand.lightGreen' },
                  })}
                >
                  {link.label}
                </a>
              )}
            </For>
        </HStack>
    )
}
