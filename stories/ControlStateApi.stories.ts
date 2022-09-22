/*
	Unless explicitly acquired and licensed from Licensor under another
	license, the contents of this file are subject to the Reciprocal Public
	License ("RPL") Version 1.5, or subsequent versions as allowed by the RPL,
	and You may not copy or use this file in either source code or executable
	form, except in compliance with the terms and conditions of the RPL.

	All software distributed under the RPL is provided strictly on an "AS
	IS" basis, WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, AND
	LICENSOR HEREBY DISCLAIMS ALL SUCH WARRANTIES, INCLUDING WITHOUT
	LIMITATION, ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
	PURPOSE, QUIET ENJOYMENT, OR NON-INFRINGEMENT. See the RPL for specific
	language governing rights and limitations under the RPL. 
*/

import { Story, Meta } from "@storybook/html";

import { ComponentFrameworkMockGenerator } from "@shko-online/componentframework-mock/ComponentFramework-Mock-Generator";
import { ControlStateAPI } from "@powerapps-samples/control-state-api/ControlStateAPI";
import {
  IInputs,
  IOutputs,
} from "@powerapps-samples/control-state-api/ControlStateAPI/generated/ManifestTypes";
import { StringPropertyMock } from "@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/StringProperty.mock";
import "@powerapps-samples/control-state-api/ControlStateAPI/css/ControlStateAPI.css"
export default {
  title: "PCF Components/ControlState",
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
    layout: "fullscreen",
  },
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    
  },
} as Meta;

const Template = (args) => {
  const container = document.createElement("div");
  container.className = "SampleNamespace.ControlStateAPI";
  let mockGenerator = new ComponentFrameworkMockGenerator<IInputs,IOutputs>(
      ControlStateAPI,
      {
        stateControlProperty: StringPropertyMock,
      },
      container
    );

    mockGenerator.ExecuteInit();
    mockGenerator.ExecuteUpdateView();
    return container;
};

export const Primary = Template.bind({});
