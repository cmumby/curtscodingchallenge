// ../../types.ts

export type Show = {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended: string | null;
  officialSite: string | null;
  schedule: {
    time: string;
    days: string[];
  };
  rating: {
    average: number | null;
  };
  weight: number;
  network: {
    id: number;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    };
    officialSite: string | null;
  };
  webChannel: string | null;
  dvdCountry: string | null;
  externals: {
    tvrage: number | null;
    thetvdb: number | null;
    imdb: string | null;
  };
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  updated: number;
  _links: {
    self: {
      href: string;
    };
    previousepisode?: {
      href: string;
      name: string;
    };
    nextepisode?: {
      href: string;
      name: string;
    };
  };
};

export type Entry = {
  score: number;
  show: Show;
};

export type DataItem = Entry;

export type Header = {
  id: boolean;
  name: boolean;
  type: boolean;
  language: boolean;
  premiered: boolean;
  ended: boolean;
  genres: boolean;
};

export type HeaderFilter = {
  id: string;
  name: string;
  type: string;
  language: string;
  premiered: string;
  ended: string;
  genres: string;
};

export type HeaderElement = {
  id: JSX.Element | string | null;
  name: JSX.Element | string | null;
  type: JSX.Element | string | null;
  language: JSX.Element | string | null;
  premiered: JSX.Element | string | null;
  ended: JSX.Element | string | null;
  genres: JSX.Element | string | null;
};

export type HeaderElementIndex = {
  [K in keyof HeaderElement]: JSX.Element | string | null;
};

type EditableHeader = {
  [K in keyof Header]: boolean;
};

export type FilterValue = {
  id: string;
  name: string;
  type: string;
  language: string;
  premiered: string;
  ended: string;
  genres: string;
};
