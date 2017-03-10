import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MappModule } from './mapp.module';


const platform = platformBrowserDynamic();
platform.bootstrapModule(MappModule);
