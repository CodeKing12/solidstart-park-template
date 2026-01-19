import { createSignal } from 'solid-js'
import { css } from 'styled-system/css'
import { Box, Container, Stack, Flex } from 'styled-system/jsx'

const faqs = [
  {
    question: 'Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eiu smod?',
    answer: 'Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eiu smod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    question: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum?',
    answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    question: 'Ut enim ad minim veniam quis nostrud exercitation ullamco?',
    answer: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.',
  },
  {
    question: 'Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eiu smod?',
    answer: 'Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eiu smod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    question: 'Excepteur sint occaecat cupidatat non provident?',
    answer: 'Excepteur sint occaecat cupidatat non provident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = createSignal<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex(openIndex() === index ? null : index)
  }

  return (
    <Box py={{ base: '16', md: '24' }} bg="white">
      <Container maxW="5xl">
        <h2
          class={css({
            fontSize: { base: '3xl', md: '4xl', lg: '5xl' },
            fontWeight: 'medium',
            color: 'brand.darkGreen',
            mb: { base: '8', md: '12' },
          })}
        >
          Frequently Asked Questions
        </h2>

        <Stack gap="4">
          {faqs.map((faq, index) => (
            <Box
              bg="#F8F8F8"
              p={{ base: '6', md: '8' }}
              cursor="pointer"
              onClick={() => toggle(index)}
              transition="background-color 0.2s"
              _hover={{ bg: '#F2F2F2' }}
            >
              <Flex justifyContent="space-between" alignItems="flex-start" gap="4">
                <Flex gap={{ base: '4', md: '6' }} flex="1">
                  <span
                    class={css({
                      fontSize: { base: 'lg', md: 'xl' },
                      fontWeight: 'medium',
                      color: 'brand.darkGreen',
                      flexShrink: 0,
                    })}
                  >
                    {index + 1}.
                  </span>
                  <Stack gap="4" w="full">
                    <h3
                      class={css({
                        fontSize: { base: 'lg', md: 'xl' },
                        fontWeight: 'medium',
                        color: 'brand.darkGreen',
                        pr: '8',
                      })}
                    >
                      {faq.question}
                    </h3>
                    <Box
                      display={openIndex() === index ? 'block' : 'none'}
                      class={css({
                        fontSize: 'md',
                        color: 'gray.600',
                        lineHeight: 'relaxed',
                        maxW: '3xl',
                      })}
                    >
                      {faq.answer}
                    </Box>
                  </Stack>
                </Flex>

                <Box color="gray.400" mt="1" flexShrink={0}>
                  {openIndex() === index ? <MinusIcon /> : <PlusIcon />}
                </Box>
              </Flex>
            </Box>
          ))}
        </Stack>

        <Flex
          justifyContent={{ base: 'center', md: 'flex-end' }}
          mt="8"
          fontSize="sm"
          color="gray.600"
          alignItems="center"
          gap="1.5"
          flexWrap="wrap"
        >
          <span>Still Searching for the Answer You Need?</span>
          <a
            href="#"
            class={css({
              textDecoration: 'underline',
              color: 'brand.darkGreen',
              fontWeight: 'medium',
              _hover: { color: 'brand.darkGreen/80' },
            })}
          >
            View FaQ Page
          </a>
          <span>or</span>
          <a
            href="#"
            class={css({
              textDecoration: 'underline',
              color: 'brand.darkGreen',
              fontWeight: 'medium',
              _hover: { color: 'brand.darkGreen/80' },
            })}
          >
            Contact Us
          </a>
        </Flex>
      </Container>
    </Box>
  )
}

function PlusIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 5V19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M5 12H19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}

function MinusIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12H19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}
