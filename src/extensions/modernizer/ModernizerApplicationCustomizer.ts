import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer,
  PlaceholderContent, 
  PlaceholderName, 
  PlaceholderProvider 
} from '@microsoft/sp-application-base';
import * as React from "react"; 
import * as ReactDOM from "react-dom"; 
import * as strings from 'ModernizerApplicationCustomizerStrings';
import Header from './Header';
 

const LOG_SOURCE: string = 'ModernizerApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IModernizerApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class ModernizerApplicationCustomizer
  extends BaseApplicationCustomizer<IModernizerApplicationCustomizerProperties> {

  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);

    let topPlaceholder: PlaceholderContent = this.context.placeholderProvider.tryCreateContent(PlaceholderName.Top); 
    if (topPlaceholder) { 
        topPlaceholder.domElement.innerHTML = '<div><div style="text-align:center" > This is to demo SPFx extension to customize app header. </div> </div>';
    }
    const elem: React.ReactElement = React.createElement(Header);  
    ReactDOM.render(elem, topPlaceholder.domElement);    

    return Promise.resolve();
  }
}
