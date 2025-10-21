import React, { FC, useState } from 'react'
import { Accordion, ContentPusher } from 'src/exports/organisms'
import { AccordionSection as AccordionSectionType } from 'src/organisms/accordion/accordion'
import { Drawer } from 'src/molecules/drawer/drawer'
import { Div } from 'src/atoms/div/div'
import { Text } from 'src/atoms/typography/text'
import { DropdownLink, Link } from '../staticNavigation'
import { Anchor, VStack, Icon } from 'src/exports/atoms'

const borderBottom = {
  borderBottom: '1px solid #E3E3E3',
}

type MobileViewProps = {
  isOpen: boolean
  links?: (DropdownLink | Link)[]
  toggle: () => void
}

export const MobileView: FC<MobileViewProps> = ({ isOpen, toggle, links }) => {
  const [showOpenSection, setOpenSection] = useState(true)
  const [currentSection, setCurrentSection] = useState(0)

  const showAndSetSection = (sectionIndex: number) => {
    setCurrentSection(sectionIndex)
    setOpenSection(false)
  }

  const section = links ? links[currentSection] : undefined

  const isLinkType = (
    valueToCheck: DropdownLink | Link,
  ): valueToCheck is Link => {
    const link = valueToCheck as Link
    return link.href !== undefined && link.title !== undefined
  }

  return (
    <Drawer
      isOpen={isOpen}
      onClick={toggle}
      location={'left'}
      openValue={320}
      showTab={false}
      inset="x0"
    >
      <ContentPusher
        zoneToOpen="left"
        isOpen={showOpenSection}
        setIsOpen={setOpenSection}
        zones={{
          left: {
            component: (
              <Div width="100%">
                <VStack gap="x0">
                  {links &&
                    links.map((item, i) =>
                      isLinkType(item) ? (
                        typeof item.title === 'string' ? (
                          <Anchor
                            inset={{ horizontal: 'x3' }}
                            key={`pusher-anchor-${i}`}
                            target="_blank"
                            {...item}
                            title={item.title}
                            height="70px"
                            display="flex"
                            alignItems="center"
                            style={borderBottom}
                          />
                        ) : (
                          <Anchor
                            href={item.href}
                            onClick={item.onClick}
                            target={item.target}
                          >
                            {item.title}
                          </Anchor>
                        )
                      ) : (
                        <Div
                          cursor="pointer"
                          display="flex"
                          justifyContent="space-between"
                          width="100%"
                          flexDirection="row"
                          key={`pusher-${i}`}
                          onClick={() => showAndSetSection(i)}
                          inset={{ horizontal: 'x3' }}
                          height="70px"
                          alignItems="center"
                          style={borderBottom}
                        >
                          <Text content={item.title} type="body" />
                          <Icon
                            name="rightChevron"
                            size="medium"
                            primaryColor="primaryBodyText"
                          />
                        </Div>
                      ),
                    )}
                </VStack>
              </Div>
            ),
            width: '100%',
          },
        }}
      >
        <Div width="100%">
          {section && !isLinkType(section) && (
            <>
              <Div
                cursor="pointer"
                display="flex"
                width="100%"
                flexDirection="row"
                onClick={() => setOpenSection(true)}
                inset={{ horizontal: 'x3' }}
                height="70px"
                alignItems="center"
                style={borderBottom}
                backgroundColor="#F5F6F7"
              >
                <Icon
                  name="leftChevron"
                  size="medium"
                  primaryColor="primaryBodyText"
                />
                <Text content="Back" type="body" inset="x3" />
              </Div>
              <AccordionSection section={section} />
            </>
          )}
        </Div>
      </ContentPusher>
    </Drawer>
  )
}

type AccordionSectionProps = {
  section: DropdownLink
}

const AccordionSection: FC<AccordionSectionProps> = ({ section }) => {
  const sections: AccordionSectionType[] = []

  if (section.featuredLinkColumn !== undefined)
    sections.push(createSection(0, 'Featured', section.featuredLinkColumn))

  section.linkColumns.forEach(({ title, links }) =>
    sections.push(createSection(sections.length, title, links)),
  )

  function createSection(i: number, title: string, links: Link[]) {
    return {
      heading: <Div>{title}</Div>,
      key: i,
      body: (
        <Div width="100%">
          {links.map((link, i) => {
            return typeof link.title === 'string' ? (
              <Div
                display="flex"
                alignItems="center"
                inset={{ horizontal: 'x3', vertical: 'x1' }}
                key={`accordion-section-${i}`}
              >
                <Anchor {...link} title={link.title} target="_blank" />
              </Div>
            ) : (
              <Anchor href={link.href} onClick={link.onClick}>
                {link.title}
              </Anchor>
            )
          })}
        </Div>
      ),
    }
  }

  return <Accordion isExclusive sections={sections} />
}

// Make sure types are correctly rendered
// hard code the featured title rendering
// pass dummy data in storybook
// IconLink - dynamic link type
// Anchor - regular link
