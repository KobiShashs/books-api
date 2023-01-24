export interface Root {
    kind: string;
    totalItems: number;
    items: Item[];
  }

  export interface Item {
      kind: string;
      id: string;
      etag: string;
      selfLink: string;
      volumeInfo?: VolumeInfo;
      saleInfo: SaleInfo;
      accessInfo: AccessInfo;
      searchInfo: SearchInfo;
  }

  export interface VolumeInfo {
      title: string;
      authors?: string[];
      publishedDate: string;
      industryIdentifiers: IndustryIdentifier[];
      readingModes: ReadingModes;
      printType: string;
      maturityRating: string;
      allowAnonLogging: boolean;
      contentVersion: string;
      panelizationSummary: PanelizationSummary;
      imageLinks?: ImageLinks;
      language: string;
      previewLink: string;
      infoLink: string;
      canonicalVolumeLink: string;
      subtitle?: string;
      pageCount?: number;
      categories?: string[];
  }

  export interface IndustryIdentifier {
      type: string;
      identifier: string;
  }

  export interface ReadingModes {
      text: boolean;
      image: boolean;
  }

  export interface PanelizationSummary {
      containsEpubBubbles: boolean;
      containsImageBubbles: boolean;
  }

  export interface ImageLinks {
      smallThumbnail: string;
      thumbnail?: string;
  }

  export interface SaleInfo {
      country: string;
      saleability: string;
      isEbook: boolean;
      buyLink: string;
  }

  export interface AccessInfo {
      country: string;
      viewability: string;
      embeddable: boolean;
      publicDomain: boolean;
      textToSpeechPermission: string;
      epub: Epub;
      pdf: Pdf;
      webReaderLink: string;
      accessViewStatus: string;
      quoteSharingAllowed: boolean;
  }

  export interface Epub {
      isAvailable: boolean;
      downloadLink: string;
  }

  export interface Pdf {
      isAvailable: boolean;
      downloadLink?: string;
  }

  export interface SearchInfo {
      textSnippet: string;
  }
