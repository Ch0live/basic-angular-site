export type PostMetadata = {
  path: string;
  date: string;
  heading: string;
  highlightImage: {
    path: string;
    alt: string;
  }
}

export type PostMetadataInputWrapper = {
  metadata: PostMetadata[]
}