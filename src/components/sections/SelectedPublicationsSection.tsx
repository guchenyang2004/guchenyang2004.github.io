import { Box, Container, VStack, HStack, Text, Heading, Flex, Link,
  Image, Collapse, useDisclosure, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton,
  useColorModeValue } from '@chakra-ui/react'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { selectedPublicationIds } from '@/site.config'
import { useLocalizedData } from '@/hooks/useLocalizedData'
import DynamicIcon from '../DynamicIcon'

const PubLink = ({ href, icon, label, hoverColor }: { href: string; icon: string; label: string; hoverColor?: string }) => (
  <Link href={href} isExternal _hover={{ textDecoration: 'none' }}>
    <HStack
      spacing={1.5} px={2.5} py={1} borderRadius="sm" border="1px solid"
      borderColor={useColorModeValue('gray.200', 'gray.600')}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize="xs" fontFamily="mono" transition="all 0.15s"
      _hover={{ borderColor: hoverColor || 'cyan.400', color: hoverColor || 'cyan.400', bg: useColorModeValue('gray.50', 'whiteAlpha.100') }}
    >
      <DynamicIcon name={icon} boxSize={3} />
      <Text>{label}</Text>
    </HStack>
  </Link>
)

const PublicationCard = ({ pub }: { pub: any }) => {
  const { t } = useTranslation()
  const { isOpen: isAbstractOpen, onToggle: onToggleAbstract } = useDisclosure()
  const { isOpen: isImageOpen, onOpen: onImageOpen, onClose: onImageClose } = useDisclosure()
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const ownerColor = useColorModeValue('cyan.600', 'cyan.300')
  const normalAuthorColor = useColorModeValue('gray.500', 'gray.400')
  const equalContribColor = useColorModeValue('gray.400', 'gray.500')

  return (
    <Box p={[4, 5, 6]} bg={useColorModeValue('white', 'gray.800')} borderRadius="md" border="1px solid" borderColor={borderColor} transition="all 0.2s" _hover={{ borderColor: useColorModeValue('cyan.300', 'cyan.600') }}>
      <Flex direction={["column", "column", "row"]} gap={[4, 4, 6]} align="stretch">
        {pub.featuredImage && (
          <Box flexShrink={0} w={["full", "full", "300px"]} minH={["200px", "220px", "auto"]}
            role="button" tabIndex={0} onClick={onImageOpen}
            onKeyDown={(e: React.KeyboardEvent) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onImageOpen() } }}
            cursor="zoom-in" overflow="hidden" borderRadius="sm"
          >
            <Image src={pub.featuredImage} alt={pub.title} w="full" h="full" objectFit="contain" transition="transform 0.3s" _hover={{ transform: 'scale(1.03)' }} />
          </Box>
        )}
        <VStack align="start" spacing={2.5} flex={1} justify="center">
          <HStack spacing={2} flexWrap="wrap" align="center">
            <Box h="2px" w="16px" bg="cyan.400" borderRadius="full" />
            <Text fontSize="xs" fontFamily="mono" color="cyan.400" fontWeight="semibold" letterSpacing="wide" textTransform="uppercase">
              {pub.venue && String(pub.year) && pub.venue.includes(String(pub.year)) ? pub.venue : `${pub.venue} ${pub.year}`}
            </Text>
            {pub.venueType && <Text fontSize="2xs" color={useColorModeValue('gray.400', 'gray.500')} fontFamily="mono">/ {pub.venueType}</Text>}
          </HStack>
          <Heading size="sm" lineHeight="tall" fontWeight="semibold" color={useColorModeValue('gray.800', 'gray.100')}>{pub.title}</Heading>
          <VStack align="start" spacing={1.5} w="full">
            <Text fontSize="xs" lineHeight="base" noOfLines={2}>
              {pub.authors.map((author: string, idx: number) => {
                const cleanName = author.replace(/\*/g, '').trim()
                const isOwner = cleanName === 'Chenyang Gu'
                const isCoFirstAuthor = pub.isCoFirst && pub.coFirstAuthors?.includes(cleanName)
                const hasStarInName = author.includes('*')
                return (
                  <Text as="span" key={idx}
                    fontWeight={isOwner || isCoFirstAuthor ? 'semibold' : 'normal'}
                    color={isOwner ? ownerColor : normalAuthorColor}
                  >
                    {author}
                    {isCoFirstAuthor && !hasStarInName && <Text as="sup" fontSize="2xs" color="cyan.400">*</Text>}
                    {idx < pub.authors.length - 1 && ', '}
                  </Text>
                )
              })}
              {pub.isCoFirst && (
                <Text as="span" fontSize="2xs" color={equalContribColor} fontStyle="italic"> ({t('about.equalContribution')})</Text>
              )}
            </Text>
            {pub.specialBadges && pub.specialBadges.length > 0 && (
              <HStack spacing={1.5} flexWrap="wrap" align="center">
                {pub.specialBadges.map((badge: string) => (
                  <Text key={badge} fontSize="2xs" fontFamily="mono" px={2} py={0.5} borderRadius="sm" border="1px solid"
                    borderColor={badge === 'First Author' ? useColorModeValue('yellow.300', 'yellow.600') : badge === 'Co-First' ? useColorModeValue('cyan.300', 'cyan.600') : badge === 'Oral' || badge === 'Spotlight' || badge === 'Best Paper' ? useColorModeValue('orange.200', 'orange.700') : useColorModeValue('gray.200', 'gray.600')}
                    color={badge === 'First Author' ? useColorModeValue('yellow.600', 'yellow.300') : badge === 'Co-First' ? useColorModeValue('cyan.600', 'cyan.300') : badge === 'Oral' || badge === 'Spotlight' || badge === 'Best Paper' ? useColorModeValue('orange.600', 'orange.300') : useColorModeValue('gray.500', 'gray.400')}
                    bg={badge === 'First Author' ? useColorModeValue('yellow.50', 'whiteAlpha.50') : badge === 'Co-First' ? useColorModeValue('cyan.50', 'whiteAlpha.50') : badge === 'Oral' || badge === 'Spotlight' || badge === 'Best Paper' ? useColorModeValue('orange.50', 'whiteAlpha.50') : 'transparent'}
                  >{badge}</Text>
                ))}
                {pub.keywords && pub.keywords.map((kw: string) => {
                  const k = kw.toLowerCase()
                  const isVLA = k.includes('vla') || k.includes('language-action') || k.includes('language action')
                  const isManip = k.includes('manipul') || k.includes('robot') || k.includes('fast') || kw.includes('操控') || kw.includes('快速')
                  const isReason = k.includes('reason') || k.includes('chain') || k.includes('thought') || k.includes('slow') || kw.includes('推理') || kw.includes('思维链') || kw.includes('慢速')
                  const is3D = k.includes('3d') || k.includes('vision') || k.includes('pretrain') || kw.includes('3D') || kw.includes('视觉') || kw.includes('预训练')
                  const isSystem = k.includes('dual') || k.includes('system') || k.includes('foundation') || k.includes('world') || kw.includes('双系统') || kw.includes('基础') || kw.includes('世界')
                  const [bg, color] = isVLA
                    ? [useColorModeValue('blue.50', 'rgba(99,179,237,0.1)'), useColorModeValue('blue.500', 'blue.300')]
                    : isManip
                    ? [useColorModeValue('orange.50', 'rgba(237,137,54,0.1)'), useColorModeValue('orange.500', 'orange.300')]
                    : isReason
                    ? [useColorModeValue('green.50', 'rgba(72,187,120,0.1)'), useColorModeValue('green.600', 'green.300')]
                    : is3D
                    ? [useColorModeValue('teal.50', 'rgba(56,178,172,0.1)'), useColorModeValue('teal.600', 'teal.300')]
                    : isSystem
                    ? [useColorModeValue('purple.50', 'rgba(159,122,234,0.1)'), useColorModeValue('purple.600', 'purple.300')]
                    : [useColorModeValue('gray.100', 'gray.700'), useColorModeValue('gray.500', 'gray.400')]
                  return (
                    <Text key={kw} fontSize="2xs" fontFamily="mono" px={2} py={0.5} borderRadius="sm" bg={bg} color={color}>
                      {kw}
                    </Text>
                  )
                })}
              </HStack>
            )}
          </VStack>
          <Box w="full" h="1px" bg={useColorModeValue('gray.100', 'gray.700')} />
          <HStack spacing={1.5} flexWrap="wrap">
            {pub.links.paper && <PubLink href={pub.links.paper} icon="FaFileAlt" label={t('about.paper')} />}
            {pub.links.arxiv && <PubLink href={pub.links.arxiv} icon="SiArxiv" label={t('about.arXiv')} hoverColor="red.400" />}
            {(pub.links.projectPage || pub.links.project) && <PubLink href={pub.links.projectPage || pub.links.project} icon="FaGlobe" label={t('about.project')} hoverColor="purple.400" />}
            {pub.links.code && <PubLink href={pub.links.code} icon="FaGithub" label={t('about.code')} hoverColor="orange.400" />}
            {pub.links.demo && <PubLink href={pub.links.demo} icon="FaPlay" label={t('about.demo')} />}
            {pub.links.dataset && <PubLink href={pub.links.dataset} icon="FaDatabase" label={t('about.dataset')} />}
            {pub.links.wechat && <PubLink href={pub.links.wechat} icon="FaWeixin" label={t('about.wechat')} hoverColor="green.400" />}
            {pub.abstract && (
              <HStack as="button" spacing={1.5} px={2.5} py={1} borderRadius="sm" border="1px solid"
                borderColor={isAbstractOpen ? useColorModeValue('cyan.300', 'cyan.600') : borderColor}
                color={isAbstractOpen ? 'cyan.400' : useColorModeValue('gray.600', 'gray.400')}
                fontSize="xs" fontFamily="mono" transition="all 0.15s" _hover={{ borderColor: 'cyan.400', color: 'cyan.400' }}
                onClick={onToggleAbstract}
              >
                <DynamicIcon name="FaChevronRight" boxSize={2.5} style={{ transform: isAbstractOpen ? 'rotate(90deg)' : 'none', transition: 'transform 0.15s' }} />
                <Text>{t('about.abstract')}</Text>
              </HStack>
            )}
          </HStack>
        </VStack>
      </Flex>
      {pub.abstract && (
        <Collapse in={isAbstractOpen} animateOpacity>
          <Box mt={4} p={4} bg={useColorModeValue('gray.50', 'gray.900')} borderRadius="md" borderLeft="2px solid" borderLeftColor="cyan.400">
            <Text fontSize={["xs", "sm"]} lineHeight="tall" color={useColorModeValue('gray.600', 'gray.400')}>{pub.abstract}</Text>
            {pub.keywords && (
              <HStack mt={3} spacing={1.5} flexWrap="wrap">
                {pub.keywords.map((keyword: string) => (
                  <Text key={keyword} fontSize="2xs" fontFamily="mono" color={useColorModeValue('gray.500', 'gray.500')} px={1.5} py={0.5} bg={useColorModeValue('gray.100', 'gray.800')} borderRadius="sm">{keyword}</Text>
                ))}
              </HStack>
            )}
          </Box>
        </Collapse>
      )}
      <Modal isOpen={isImageOpen} onClose={onImageClose} size="4xl" isCentered>
        <ModalOverlay />
        <ModalContent bg="transparent" boxShadow="none">
          <ModalCloseButton color={useColorModeValue('gray.700', 'gray.200')} />
          <ModalBody p={0} display="flex" alignItems="center" justifyContent="center">
            <Image src={pub.featuredImage} alt={`${pub.title} large preview`} maxH="80vh" maxW="90vw" objectFit="contain" borderRadius="lg" bg={useColorModeValue('white', 'gray.900')} p={4} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}

const SelectedPublicationsSection: React.FC = () => {
  const { t } = useTranslation()
  const { publications } = useLocalizedData()

  const selectedPubs = useMemo(
    () => publications
      .filter((pub) => selectedPublicationIds.has(pub.id))
      .sort((a, b) => b.year - a.year),
    [publications]
  )

  if (selectedPubs.length === 0) return null

  return (
    <Box w="full">
      <Container maxW={["full", "full", "7xl"]} px={[2, 4, 8]}>
        <Flex align="center" gap={3} mb={[3, 4]}>
          <Box h="2px" w="20px" bg="cyan.400" borderRadius="full" flexShrink={0} />
          <Heading size="md" fontWeight="semibold">{t('about.selectedPublications')}</Heading>
          <Box flex="1" h="1px" bg={useColorModeValue('gray.200', 'gray.700')} />
        </Flex>
        <VStack spacing={[4, 5, 6]} align="stretch">
          {selectedPubs.map((pub) => (
            <PublicationCard key={pub.id} pub={pub} />
          ))}
          <Box textAlign="center" pt={2}>
            <Link href="/publications" _hover={{ textDecoration: 'none' }}>
              <HStack spacing={2} justify="center" color={useColorModeValue('gray.500', 'gray.400')} fontSize="sm" fontFamily="mono" transition="all 0.15s" _hover={{ color: 'cyan.400' }}>
                <Text>{t('about.viewAllPublications')}</Text>
                <Text>→</Text>
              </HStack>
            </Link>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

export default SelectedPublicationsSection
