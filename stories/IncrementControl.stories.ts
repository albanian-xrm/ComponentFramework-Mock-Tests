import { Story, Meta } from '@storybook/html';

import { ComponentFrameworkMockGenerator } from '@shko-online/componentframework-mock/ComponentFramework-Mock-Generator';
import { IncrementControl } from '@powerapps-samples/increment-control/IncrementControl';
import { IInputs, IOutputs } from '@powerapps-samples/increment-control/IncrementControl/generated/ManifestTypes';
import * as resource from '@powerapps-samples/increment-control/IncrementControl/strings/IncrementControl.1033.resx';
import { NumberPropertyMock } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/NumberProperty.mock';

export default {
    title: 'PCF Components/IncrementControl',
   
    argTypes: {
        
        value: {type :"number"},
       
    },
     parameters: {
        controls:{
            include:['value'],
            layout: 'fullscreen',
        },
    },
  } as Meta;

  const Template = (args) => {
    const container =document.createElement("div");
    const mockGenerator: ComponentFrameworkMockGenerator<IInputs, IOutputs> = new ComponentFrameworkMockGenerator(
        IncrementControl,
        {
            value : NumberPropertyMock
        },
        container
    );
    const value = mockGenerator.context.parameters.value as NumberPropertyMock;
    value.setValue(args.value);
    mockGenerator.SetControlResource(resource);
    mockGenerator.ExecuteInit();
    mockGenerator.ExecuteUpdateView();
    return container;
  }

  export const Primary = Template.bind({});
  Primary.args ={
   value: 100,
  }