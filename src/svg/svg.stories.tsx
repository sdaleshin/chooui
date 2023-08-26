import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AddInCircleSvg } from './AddInCircleSvg'
import styled from 'styled-components'
import {
    Typography,
    TypographyType,
} from '../components/typography/Typography'
import { CheckInCircleSvg } from './CheckInCircleSvg'
import { CrossInCircleSvg } from './CrossInCircleSvg'
import { LogoSvg } from './LogoSvg'
import { DictionarySvg } from './DictionarySvg'
import { Colors } from '../styles/colors/colors'
import { CardsSvg } from './CardsSvg'
import { GroupsSvg } from './GroupsSvg'
import { EditSvg } from './EditSvg'
import { CardsBigSvg } from './CardsBigSvg'
import { MinusInCircleSvg } from './MinusInCircleSvg'
import { CloseSvg } from './CloseSvg'

const StyledAddInCircleSvg = styled(AddInCircleSvg)`
    path {
        fill: black;
    }
    rect {
        stroke: black;
    }
`

const StyledCheckInCircleSvg = styled(CheckInCircleSvg)`
    path {
        fill: black;
    }
    rect {
        stroke: black;
    }
`

const StyledCrossInCircleSvg = styled(CrossInCircleSvg)`
    path {
        stroke: black;
    }
    rect {
        stroke: black;
    }
`

const StyledLogoSvg = styled(LogoSvg)`
    path {
        fill: black;
    }
`

const StyledDictionarySvg = styled(DictionarySvg)`
    path {
        fill: black;
    }
`
const StyledCardsSvg = styled(CardsSvg)`
    path {
        fill: black;
    }
`

const StyledGroupsSvg = styled(GroupsSvg)`
    path {
        fill: black;
    }
`

const StyledCloseSvg = styled(CloseSvg)`
    path {
        stroke: black;
    }
`

const BlockDiv = styled.div`
    display: flex;
    width: 300px;
    justify-content: space-between;
    align-items: center;
    padding: 40px;
    border: 1px solid ${Colors.Gray60};
    margin-left: -1px;
    margin-top: -1px;
`

const ContainerDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 1000px;
    margin: 20px;
`

const AllSvgOnPage = () => {
    return (
        <ContainerDiv>
            <BlockDiv>
                <Typography type={TypographyType.Body}>
                    AddInCircleSvg
                </Typography>
                <StyledAddInCircleSvg />
            </BlockDiv>
            <BlockDiv>
                <Typography type={TypographyType.Body}>
                    CheckInCircleSvg
                </Typography>
                <StyledCheckInCircleSvg />
            </BlockDiv>
            <BlockDiv>
                <Typography type={TypographyType.Body}>
                    CrossInCircleSvg
                </Typography>
                <StyledCrossInCircleSvg />
            </BlockDiv>
            <BlockDiv>
                <Typography type={TypographyType.Body}>LogoSvg</Typography>
                <StyledLogoSvg />
            </BlockDiv>
            <BlockDiv>
                <Typography type={TypographyType.Body}>
                    DictionarySvg
                </Typography>
                <StyledDictionarySvg />
            </BlockDiv>
            <BlockDiv>
                <Typography type={TypographyType.Body}>CardsSvg</Typography>
                <StyledCardsSvg />
            </BlockDiv>
            <BlockDiv>
                <Typography type={TypographyType.Body}>GroupsSvg</Typography>
                <StyledGroupsSvg />
            </BlockDiv>
            <BlockDiv>
                <Typography type={TypographyType.Body}>EditSvg</Typography>
                <EditSvg />
            </BlockDiv>
            <BlockDiv>
                <Typography type={TypographyType.Body}>CardsBigSvg</Typography>
                <CardsBigSvg />
            </BlockDiv>
            <BlockDiv>
                <Typography type={TypographyType.Body}>
                    MinusInCircleSvg
                </Typography>
                <MinusInCircleSvg />
            </BlockDiv>
            <BlockDiv>
                <Typography type={TypographyType.Body}>CloseeSvg</Typography>
                <StyledCloseSvg />
            </BlockDiv>
        </ContainerDiv>
    )
}

export default {
    title: 'Design System/Icons2',
    component: AllSvgOnPage,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof AllSvgOnPage>

const Template: ComponentStory<typeof AllSvgOnPage> = (args: object) => (
    <AllSvgOnPage {...args} />
)

export const Default = Template.bind({})
