import React from "react";
import {create} from "react-test-renderer";
import {ProfileStatus} from "./ProfileStatus";

describe('Profile status component test', () => {
    test('after creation SPAN should contains correct status', () => {
        const component = create(<ProfileStatus status={'fun-fun-fun'} updateStatus={() => {
        }}/>)
        const root = component.root
        const span = root.findByType('span')
        expect(span.children[0]).toBe('fun-fun-fun')
    })
    test('after creation SPAN should be displayed', () => {
        const component = create(<ProfileStatus status={'fun-fun-fun'} updateStatus={() => {
        }}/>)
        const root = component.root
        const span = root.findByType('span')
        expect(span.children.length).toBe(1)
    })
    test('after creation SPAN should contains correct status, not empty', () => {
        const component = create(<ProfileStatus status={'fun-fun-fun'} updateStatus={() => {
        }}/>)
        const root = component.root
        expect(() => {
            const input = root.findByType('span')
        }).toThrow()
    })
    test("INPUT should be displayed in editMode instead of SPAN", () => {
        const component = create(<ProfileStatus status={'fun-fun-fun'} updateStatus={() => {
        }}/>)
        const root = component.root
        const span = root.findByType('span')
        span.instance.onDoubleClick()
        const input = root.findByType('input')
        expect(input.instance.value).toBe('fun-fun-fun')
    })

    test("callback should be called", () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status={'fun-fun-fun'} updateStatus={mockCallback}/>)
        const instance = component.getInstance()
        instance?.props.deactivateEdiMode()
        expect(mockCallback.mock.calls.length).toBe(1)
    })
})
