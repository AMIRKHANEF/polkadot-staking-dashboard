// Copyright 2022 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

export interface PluginsContextInterface {
  toggleService: (k: string) => void;
  getServices: () => string[];
  services: string[];
}
