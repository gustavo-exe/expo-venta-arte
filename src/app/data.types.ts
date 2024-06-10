export interface Asset {
  id: number;
  imageUrl: string;
  title: string;
  details: string;
}

export interface UserProfile {
  idProfile: string;
  about: string;
  name: string;
  avatarUrl: string;
  assets: Asset[];
}

