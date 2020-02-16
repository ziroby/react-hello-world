import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Task from "./task.component";

configure({adapter: new Adapter() });

describe("Tasks", () => {
    let component = shallow(<Task />);

    it("should render a component", () => {
	expect(component).toBeDefined();
    });

    it("should contain a check box", () => {
	const checkbox = component.find("input");
	expect(checkbox.length).toEqual(1);
    });
});
