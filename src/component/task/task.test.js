import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Task from "./task.component";

configure({adapter: new Adapter() });

describe("Task", () => {
    const state = {
	text: "Do a thing",
    }
    let component = shallow(<Task state={state} />);

    it("should render a component", () => {
	expect(component).toBeDefined();
    });

    it("should contain a check box", () => {
	const checkbox = component.find("input");
	expect(checkbox.length).toEqual(1);
    });

    it("should contain a check box", () => {
	const checkbox = component.find("input");
	const type = checkbox.props().type;
	expect (type).toEqual("checkbox");
	expect(checkbox.length).toEqual(1);
    });

    it("should contain a label", () => {
	const checkbox = component.find("label");
	expect(checkbox.length).toEqual(1);
    });

    it("should contain a label with the right text", () => {
    	const label = component.find("label");
    	const text = label.text();
    	expect (text).toEqual("Do a thing");
    });

});
