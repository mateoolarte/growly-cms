import type { Schema, Attribute } from '@strapi/strapi';

export interface GrowlyAi extends Schema.Component {
  collectionName: 'components_growly_ais';
  info: {
    displayName: 'AI';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    cta: Attribute.Component<'growly.cta'>;
    image: Attribute.Media;
  };
}

export interface GrowlyCta extends Schema.Component {
  collectionName: 'components_growly_ctas';
  info: {
    displayName: 'CTA';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    textBtn: Attribute.String;
    linkBtn: Attribute.String;
  };
}

export interface GrowlyFeatures extends Schema.Component {
  collectionName: 'components_growly_features';
  info: {
    displayName: 'Features';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    feature: Attribute.Component<'growly.item', true>;
  };
}

export interface GrowlyHero extends Schema.Component {
  collectionName: 'components_growly_heros';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    cta: Attribute.Component<'growly.cta'>;
    image: Attribute.Media;
  };
}

export interface GrowlyItem extends Schema.Component {
  collectionName: 'components_growly_item';
  info: {
    displayName: 'Item';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    icon: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'growly.ai': GrowlyAi;
      'growly.cta': GrowlyCta;
      'growly.features': GrowlyFeatures;
      'growly.hero': GrowlyHero;
      'growly.item': GrowlyItem;
    }
  }
}
