import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import HelloWorld from "./hello-world.component";


configure({adapter: new Adapter() });

describe("<HelloWorld />", () => {

    let component = shallow(<HelloWorld />);

    it("should render a <HelloWorld /> component", () => {
        expect(component).toBeDefined();
    }); 

});
