import { PlatformRef } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

const platformRef: PlatformRef = platformBrowserDynamic()
platformRef
  .bootstrapModule(AppModule)
  .catch(err => console.log(err))