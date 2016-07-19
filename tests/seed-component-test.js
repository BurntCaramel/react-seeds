import expect from 'expect'
import { expectClean } from './clean'
import React from 'react'
import { shallow, mount } from 'enzyme'

import Seed from 'src/Seed'

describe('<Seed>', () => {
	it('children prop', () => {
		const wrapper = shallow(
			<Seed children='hello' />
		)

		expect(
			wrapper.contains('hello')
		).toBe(true)
	})

	it('nested children', () => {
		const wrapper = shallow(
			<Seed>
				hello
			</Seed>
		)
		expect(wrapper.contains('hello')).toBe(true)
	})

	it('styler props', () => {
		const stylerProps = {
			boxSizing: 'content-box',
			width: 500,
			height: 200,
			minWidth: 1000,
			minHeight: 800,
			visibility: 'hidden',
			opacity: 0.5,
			margin: { top: 10, bottom: 20, left: 30, right: 40 },
			padding: { top: 10, bottom: 20, left: 30, right: 40 },
			row: true,
			reverse: true,
			wrap: true,
			alignItems: 'center',
			basis: '50%',
			grow: 2,
			shrink: 3,
			absolute: { top: 10, bottom: 20, left: 30, right: 40 },
			cornerRadius: 20.0,
			border: { width: 4, style: 'solid', color: 'white' }
		}
		const wrapper = shallow(
			<Seed { ...stylerProps }>
				hello
			</Seed>
		)

		expect(wrapper.contains('hello')).toBe(true)

		expectClean(wrapper.props().style).toEqual({
			boxSizing: 'content-box',
			width: 500,
			height: 200,
			minWidth: 1000,
			minHeight: 800,
			visibility: 'hidden',
			opacity: 0.5,
			marginTop: 10,
			marginBottom: 20,
			marginLeft: 30,
			marginRight: 40,
			paddingTop: 10,
			paddingBottom: 20,
			paddingLeft: 30,
			paddingRight: 40,
			display: 'flex',
			flexDirection: 'row-reverse',
			flexWrap: 'wrap',
			alignItems: 'center',
			flexBasis: '50%',
			flexGrow: 2,
			flexShrink: 3,
			position: 'absolute',
			top: 10,
			bottom: 20,
			left: 30,
			right: 40,
			borderRadius: 20.0,
			borderWidth: 4,
			borderStyle: 'solid',
			borderColor: 'white'
		})
	})
})