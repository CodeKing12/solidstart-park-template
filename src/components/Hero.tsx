import { css } from 'styled-system/css'
import { Box, Container, Grid, Flex, Stack } from 'styled-system/jsx'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Textarea } from '~/components/ui/textarea'
import * as Checkbox from '~/components/ui/checkbox'

export function Hero() {
  return (
    <Box
      position="relative"
      py={{ base: '16', md: '24', lg: '32' }}
      bgImage="url(https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop)"
      bgSize="cover"
      bgPosition="center"
    >
      {/* Dark Overlay */}
      <Box
        position="absolute"
        inset="0"
        bg="black/60"
        zIndex="0"
      />

      <Container position="relative" zIndex="1" maxW="8xl">
        <Grid columns={{ base: 1, lg: 2 }} gap={{ base: '12', lg: '24' }} alignItems="center">
          
          {/* Left Column: Content */}
          <Stack gap="8">
            <Box>
                <Box
                    display="inline-block"
                    bg="white/10"
                    backdropFilter="blur(4px)"
                    color="white"
                    px="4"
                    py="1"
                    fontSize="sm"
                    fontWeight="medium"
                    borderRadius="sm"
                >
                Market research and analysis
                </Box>
            </Box>

            <h1 class={css({ 
                fontSize: { base: '4xl', md: '5xl', lg: '6xl' }, 
                fontWeight: 'bold', 
                color: 'white', 
                lineHeight: 'tight' 
            })}>
              Empowering your <br />
              business potential
            </h1>

            <p class={css({ 
                fontSize: 'lg', 
                color: 'gray.200', 
                maxW: 'xl' 
            })}>
              Unlock your business's potential with our tailored services. Let's achieve success together.
            </p>

            <Box>
                <Button 
                    bg="white" 
                    color="black" 
                    px="6"
                    h="12"
                    fontWeight="600"
                    _hover={{ bg: 'gray.100' }}
                >
                Learn more <ArrowRightIcon />
                </Button>
            </Box>
          </Stack>

          {/* Right Column: Form */}
          <Box bg="white" p={{ base: '6', md: '8' }} borderRadius="lg" shadow="xl">
            <Stack gap="6">
                <Box>
                    <h2 class={css({ fontSize: '2xl', fontWeight: 'semibold', color: 'brand.darkGreen', mb: '2' })}>
                        Book free consultation
                    </h2>
                    <p class={css({ color: 'gray.600', fontSize: 'sm', lineHeight: 'relaxed' })}>
                        Fill out the form below, and we'll arrange a consultation at a time most suitable for you.
                    </p>
                </Box>

                <Grid columns={{ base: 1, md: 2 }} gap="4">
                    <Stack gap="1.5">
                         <Input placeholder="Your name *" borderColor="gray.300" _placeholder={{ color: 'gray.500' }} />
                    </Stack>
                    <Stack gap="1.5">
                         <Input placeholder="Company name" borderColor="gray.300" _placeholder={{ color: 'gray.500' }} />
                    </Stack>
                </Grid>

                <Grid columns={{ base: 1, md: 2 }} gap="4">
                    <Stack gap="1.5">
                         <Input placeholder="Phone number *" borderColor="gray.300" _placeholder={{ color: 'gray.500' }} />
                    </Stack>
                    <Stack gap="1.5">
                         <Input placeholder="Email address *" borderColor="gray.300" _placeholder={{ color: 'gray.500' }} />
                    </Stack>
                </Grid>
                
                <Stack gap="1.5">
                    <Textarea 
                        placeholder="Anything else you would like us to know?" 
                        borderColor="gray.300" 
                        _placeholder={{ color: 'gray.500' }}
                        rows={4}
                        resize="none"
                    />
                </Stack>

                <Stack direction="row" align="start" gap="3">
                    <Checkbox.Root class={css({ display: 'flex', alignItems: 'flex-start', gap: '2' })}>
                        <Checkbox.HiddenInput />
                        <Checkbox.Control class={css({ 
                            h: '4', 
                            w: '4', 
                            mt: '1',
                            borderRadius: 'sm', 
                            borderWidth: '1px', 
                            borderColor: 'gray.300', 
                            _checked: { bg: 'brand.lightGreen', borderColor: 'brand.lightGreen', color: 'white' } 
                        })}>
                            <Checkbox.Indicator>
                                <CheckIcon />
                            </Checkbox.Indicator>
                        </Checkbox.Control>
                        <Checkbox.Label class={css({ fontSize: 'sm', color: 'gray.600' })}>
                            I understand and agree to the <a href="#" class={css({ color: 'brand.darkGreen', textDecoration: 'underline' })}>privacy policy</a>.
                        </Checkbox.Label>
                    </Checkbox.Root>
                </Stack>

                <Button 
                    bg="brand.lightGreen" 
                    color="white" 
                    w="full" 
                    h="12"
                    fontSize="md"
                    fontWeight="600"
                    _hover={{ bg: 'green.500' }}
                >
                    Submit request
                </Button>
            </Stack>
          </Box>

        </Grid>
      </Container>
    </Box>
  )
}

function ArrowRightIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class={css({ ml: '2' })}>
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    )
}

function CheckIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12" />
        </svg>
    )
}