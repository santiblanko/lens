// Extensions API -> Status bar customizations

import React from "react";
import { BaseRegistry } from "./base-registry";

export interface StatusBarComponents {
  Item?: React.ComponentType;
}

export interface StatusBarRegistrationV2 {
  components: StatusBarComponents;
}

export interface StatusBarRegistration extends StatusBarRegistrationV2 {
  /**
   * @deprecated
   */
  item?: React.ReactNode;
}

export class StatusBarRegistry extends BaseRegistry<StatusBarRegistration> {
}

export const statusBarRegistry = new StatusBarRegistry();
