export interface User {
  id: string;
  firstName: string;
  lastName: string;
  url?: string;
  profilePhotoId: string;
  coverImageId: string;
  currentCity: string;
  currentState: string;
  originCity?: string;
  originState?: string;
  coverImagePosition: {
    heightOfCanvas: number;
    topPosition: number
  };

  personalTraits?: {
    relationshipStatus: any;
    hasKids: boolean;
    numberOfKids: number;
    agesOfKids: any;
  };
  gender?: any;
}

export interface Comment {
  content: string;
  creationDateTime: string;
  creator: User;
  id: string;
  media: any;
  reactedType: number; // turn to enum
  reactionCount?: ReactionCount;
  taggedUsers: any[];
}

export interface ReactionCount {
  bookMarks: number;
  cry: number;
  hug: number;
  love: number;
  pray: number;
  raisingHands: number;
  total: number;
}


export interface FeedPost {
  id: string;
  metadata?: any;
  group?: {
    id: string;
    name: string;
    profileImageId: string;
    url?: string;
  };
  commentCount: number;
  comments?: Comment[] | null;
  content: string;
  creationDateTime: string;
  taggedUsers: Partial<User>[];
  media?: { url: string; contentType?: string; type?: string }[];
  reactedType?: any;
  reactionCount?: any;
}

export interface Feed {
  creator: User;
  post: FeedPost;
}
