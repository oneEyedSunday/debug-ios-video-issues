import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Feed } from '../interfaces/Feed';

@Injectable()
export class ApiService {
  constructor() { }

  getFeed(): Observable<{ items: Feed[]; totalCount: number }> {
    return of({
      totalCount: 1,
      items: [
        {
          creator: {
            id: 'PZxIspwVSDVUvLGqobG4gp6z5xM2',
            firstName: 'Scroll',
            lastName: 'Test',
            currentCity: 'New York',
            currentState: 'NY',
            profilePhotoId: 'o3CQ4uyXT94hX2sGnTOsR',
            coverImageId: '56010H4PgT5peWHmBz-1c',
            coverImagePosition: {
              angle: 0,
              scale: 0.9375,
              h: 350,
              w: 1200,
              x: 0,
              y: 325,
              heightOfCanvas: 192,
              topPosition: -92
            },
            url: 'https://dlprenlpl0sal.cloudfront.net/PZxIspwVSDVUvLGqobG4gp6z5xM2/o3CQ4uyXT94hX2sGnTOsR_50*0.png?Expires=1606240351500&Key-Pair-Id=APKAIPV5WC3PMIYXF2NQ&Signature=FRdMWzgntBCrlkWkOv8aSJxrjGHD7QYdNvyO5kEVtHWl86KzYXKC4s7mdOhJtayEh2~x~yTebQD2HlOU6ry~lbsbwLJGfGC2VDgOBE~KdvjuVX7xFz9vZvG7MfisKRwHgQ6M3A5txi1ljDO1JT77iOaZC-pPFvnIXcYFMO-U0dgYStGTm880BC7VKVfxfRWgYfHx7SZwF1J2OuQf2Y2XKaXLarFnZ3oY10YIKk4czYSwYjhmuKx~xzL-UCYG9WBq1HgdTSFrX9Pv8qof~1Y7w88FzJEPx1rbkqkmNzBRM9heIPDn1TZxPDVMETTE~71uP4DU1f6XztnGxDSi68mL5Q__'
          },
          post: {
            reactionCount: {
              total: 0,
              love: 0,
              pray: 0,
              raisingHands: 0,
              hug: 0,
              cry: 0,
              bookMarks: 0
            },
            commentCount: 0,
            comments: null,
            reactedType: null,
            id: '08f758c2-b1c5-473f-96c6-a71f53772733',
            isSeeded: false,
            metadata: null,
            content: 'Scroll Test joined Involved! Post a welcome message on their page now!',
            latitude: null,
            longitude: null,
            creationDateTime: '2020-11-23T16:52:24.6101423Z',
            group: {
              id: null,
              name: null,
              profileImageId: null
            },
            taggedUsers: [],
            media: null
          }
        },
        {
          creator: {
            id: 'Xxc0mFgaAfR3BuLScEfQ6AbNBZ73',
            firstName: 'Sunday',
            lastName: 'Idiakose',
            currentCity: 'Port Angeles',
            currentState: 'WA',
            profilePhotoId: 'vX_omNp6dHJYiPCZPmATO',
            coverImageId: '3-_RCCcjvi2cJT8WkG_QN',
            coverImagePosition: {
              angle: 0,
              scale: 0.9669621273166801,
              h: 280,
              w: 1200,
              x: 0,
              y: 317,
              heightOfCanvas: 461,
              topPosition: -113
            },
            url: 'https://dlprenlpl0sal.cloudfront.net/Xxc0mFgaAfR3BuLScEfQ6AbNBZ73/vX_omNp6dHJYiPCZPmATO_50*0.png?Expires=1606240351502&Key-Pair-Id=APKAIPV5WC3PMIYXF2NQ&Signature=XiHOjkiJhpRIQ2L9MGqp6DDPkO6DobcJQhnsh1y4S7nTvDCcdjKE-9dSzNyTp9s0v~RuHT1JZUXeyU-hNr~39YTHIsnZutTskt-1J~YVUvFsPq6rxaRR4B1JzA6rMGlXW6ezQpOJ2HJohiolvFHGz8Z4RFUFahnv6sklXq7TujJgdSyJLyh16rizng0nUZ6bpn8HHTLqrXFwpfhc8faB8RiKQz7LS39dfXZXffozoKj2MBNelLlONJ6~zBTUPnCSnuw0~o0ws~q9UJg38N7IKY9RJcha4S-tbFwPAAM~6JWTaj6aUhvA8ngwug7vvu3HeyaqppQ1HVVxOlgJbO323g__'
          },
          post: {
            reactionCount: {
              total: 0,
              love: 0,
              pray: 0,
              raisingHands: 0,
              hug: 0,
              cry: 0,
              bookMarks: 0
            },
            commentCount: 2,
            comments: [
              {
                reactionCount: {
                  total: 0,
                  love: 0,
                  pray: 0,
                  raisingHands: 0,
                  hug: 0,
                  cry: 0,
                  bookMarks: 0
                },
                reactedType: null,
                id: 'DGmZicY6DVT_qe4fpBayt',
                content: 'I only see the play button not a thumbnail image of the video. (iPhone)',
                creationDateTime: '2020-11-19T16:02:53.0888794Z',
                creator: {
                  id: 'aCnPBKuAcsV5PGKYKo1eLoChjfB3',
                  firstName: 'Nick',
                  lastName: 'Seedorf',
                  currentCity: 'Sacramento',
                  currentState: 'CA',
                  profilePhotoId: 'FJqztaaGDfpfjiwkstwlE',
                  coverImageId: 'GnqcYePx4pW_hJd0CFDOI',
                  coverImagePosition: {
                    angle: 0,
                    scale: 0.5859375,
                    h: 350,
                    w: 1200,
                    x: 0,
                    y: 162,
                    heightOfCanvas: 192,
                    topPosition: -46
                  },
                  url: 'https://dlprenlpl0sal.cloudfront.net/aCnPBKuAcsV5PGKYKo1eLoChjfB3/FJqztaaGDfpfjiwkstwlE_50*0.png?Expires=1606240354652&Key-Pair-Id=APKAIPV5WC3PMIYXF2NQ&Signature=G3w5ccQk0wFHb0prG8ZBAfi0YrV--BxvOrHQ7HkeAsY0pEoZZnoCqUu8SqMTeykLMDv3yTWYv9aeJq2H9~w9iSdjqWOMdbZ5pfj01KKL~oud7R2AxdnEAvq3PSYEBz7FZ2zeo2bhm3nFQ-hG1DZ3hq3kl9n6jSXOhdfrPD3G7of~vmEIAX8rlHtmw6A6MTwxqW7SAIi~UXCz7g~jmI5JLCqerYOLRhkIwqc43lxL6gpxFRAcBoqeKXFSmZ~vn2x~MAaROXiv0tkBtH2k3ggZNUcn~uF4bvN0y7TskPKO11iww9AEBPSh4p3oUFtPAfx1lwTteEH5KhKVzt3gFliGUA__'
                },
                media: null,
                taggedUsers: []
              }
            ],
            reactedType: null,
            id: '-ns0oMow2jL-L8x6i3Bh2',
            isSeeded: false,
            metadata: null,
            content: 'Another check to test flow, this time with a media attached.',
            latitude: null,
            longitude: null,
            creationDateTime: '2020-11-19T11:25:28.992711Z',
            group: {
              id: null,
              name: null,
              profileImageId: null
            },
            taggedUsers: [],
            media: [
              {
                id: 'y4ogC-jl0rLBI1vhWOaQn',
                contentType: 'video/mp4',
                url: 'https://static.videezy.com/system/resources/previews/000/008/452/original/Dark_Haired_Girl_Pensive_Looks_at_Camera.mp4'
              }
            ]
          }
        },
        {
          creator: {
            id: 'Xxc0mFgaAfR3BuLScEfQ6AbNBZ73',
            firstName: 'Sunday',
            lastName: 'Idiakose',
            currentCity: 'Port Angeles',
            currentState: 'WA',
            profilePhotoId: 'vX_omNp6dHJYiPCZPmATO',
            coverImageId: '3-_RCCcjvi2cJT8WkG_QN',
            coverImagePosition: {
              angle: 0,
              scale: 0.9669621273166801,
              h: 280,
              w: 1200,
              x: 0,
              y: 317,
              heightOfCanvas: 461,
              topPosition: -113
            },
            url: 'https://dlprenlpl0sal.cloudfront.net/Xxc0mFgaAfR3BuLScEfQ6AbNBZ73/vX_omNp6dHJYiPCZPmATO_50*0.png?Expires=1606240351502&Key-Pair-Id=APKAIPV5WC3PMIYXF2NQ&Signature=XiHOjkiJhpRIQ2L9MGqp6DDPkO6DobcJQhnsh1y4S7nTvDCcdjKE-9dSzNyTp9s0v~RuHT1JZUXeyU-hNr~39YTHIsnZutTskt-1J~YVUvFsPq6rxaRR4B1JzA6rMGlXW6ezQpOJ2HJohiolvFHGz8Z4RFUFahnv6sklXq7TujJgdSyJLyh16rizng0nUZ6bpn8HHTLqrXFwpfhc8faB8RiKQz7LS39dfXZXffozoKj2MBNelLlONJ6~zBTUPnCSnuw0~o0ws~q9UJg38N7IKY9RJcha4S-tbFwPAAM~6JWTaj6aUhvA8ngwug7vvu3HeyaqppQ1HVVxOlgJbO323g__'
          },
          post: {
            reactionCount: {
              total: 0,
              love: 0,
              pray: 0,
              raisingHands: 0,
              hug: 0,
              cry: 0,
              bookMarks: 0
            },
            commentCount: 0,
            comments: null,
            reactedType: null,
            id: '2m2l0FHL9PVKrmMbbNyhv',
            isSeeded: false,
            metadata: null,
            content: 'Another check to test flow',
            latitude: null,
            longitude: null,
            creationDateTime: '2020-11-19T11:24:42.7379617Z',
            group: {
              id: null,
              name: null,
              profileImageId: null
            },
            taggedUsers: [],
            media: []
          }
        },
        {
          creator: {
            id: 'Xxc0mFgaAfR3BuLScEfQ6AbNBZ73',
            firstName: 'Sunday',
            lastName: 'Idiakose',
            currentCity: 'Port Angeles',
            currentState: 'WA',
            profilePhotoId: 'vX_omNp6dHJYiPCZPmATO',
            coverImageId: '3-_RCCcjvi2cJT8WkG_QN',
            coverImagePosition: {
              angle: 0,
              scale: 0.9669621273166801,
              h: 280,
              w: 1200,
              x: 0,
              y: 317,
              heightOfCanvas: 461,
              topPosition: -113
            },
            url: 'https://dlprenlpl0sal.cloudfront.net/Xxc0mFgaAfR3BuLScEfQ6AbNBZ73/vX_omNp6dHJYiPCZPmATO_50*0.png?Expires=1606240351502&Key-Pair-Id=APKAIPV5WC3PMIYXF2NQ&Signature=XiHOjkiJhpRIQ2L9MGqp6DDPkO6DobcJQhnsh1y4S7nTvDCcdjKE-9dSzNyTp9s0v~RuHT1JZUXeyU-hNr~39YTHIsnZutTskt-1J~YVUvFsPq6rxaRR4B1JzA6rMGlXW6ezQpOJ2HJohiolvFHGz8Z4RFUFahnv6sklXq7TujJgdSyJLyh16rizng0nUZ6bpn8HHTLqrXFwpfhc8faB8RiKQz7LS39dfXZXffozoKj2MBNelLlONJ6~zBTUPnCSnuw0~o0ws~q9UJg38N7IKY9RJcha4S-tbFwPAAM~6JWTaj6aUhvA8ngwug7vvu3HeyaqppQ1HVVxOlgJbO323g__'
          },
          post: {
            reactionCount: {
              total: 0,
              love: 0,
              pray: 0,
              raisingHands: 0,
              hug: 0,
              cry: 0,
              bookMarks: 0
            },
            commentCount: 0,
            comments: null,
            reactedType: null,
            id: '5QNXu7AeqhbNqo9HdqX9s',
            isSeeded: false,
            metadata: null,
            content: '',
            latitude: null,
            longitude: null,
            creationDateTime: '2020-11-19T11:22:19.4309013Z',
            group: {
              id: null,
              name: null,
              profileImageId: null
            },
            taggedUsers: [],
            media: [
              {
                id: 'avT_-LtdkgkZ6dUtSa6Ds',
                contentType: 'image/png',
                url: 'https://dlprenlpl0sal.cloudfront.net/Xxc0mFgaAfR3BuLScEfQ6AbNBZ73/avT_-LtdkgkZ6dUtSa6Ds.png?Expires=1606240352163&Key-Pair-Id=APKAIPV5WC3PMIYXF2NQ&Signature=mMDYl54zgnAeXmLI6DorxHxyxHEVLMls3a0bxkuv4p1h4Xhq7ktqrUBPsZ~A06f-NGtGSdkHcWeyPeneq-4jMxZMVZL1JI9ICBBVr06-wtLDUJrrPCWxzdLJPh4lrRsRD6mzg3BAKI-mIqScP-1IyfFu5jvj1BWWUiFc2KMy0~T5SEc6ZkW7qiVZIGRgZnzsL0D7sqE-lui7ejMRXOcI8qsuHyg3Z4uHhJJioC8r5pKze92OjVkNp98rHaB7PeWij5DLZryuf2Kz2o3f0iN0wuBUmvJ2~nbjALnrcZUnyt9yqNTlzQik7RJJ4mRKgqjNzffqdGJu4NrS3IuATJIysg__'
              }
            ]
          }
        },
        {
          creator: {
            id: '0tDTe3K79Sgc9dpGN22LArbx42m1',
            firstName: 'AviSam',
            lastName: 'Cb',
            currentCity: 'New York',
            currentState: 'NY',
            profilePhotoId: '0R5rcwy7jk-QX6H040Gzv',
            coverImageId: 'A16jeOOyCLUYqxRZxXkO4',
            coverImagePosition: {
              angle: 0,
              scale: 0.5725190839694657,
              h: 280,
              w: 1200,
              x: 0,
              y: 81,
              heightOfCanvas: 157,
              topPosition: -28
            },
            url: 'https://dlprenlpl0sal.cloudfront.net/0tDTe3K79Sgc9dpGN22LArbx42m1/0R5rcwy7jk-QX6H040Gzv_50*0.png?Expires=1606240351532&Key-Pair-Id=APKAIPV5WC3PMIYXF2NQ&Signature=ntIl1wIV1o-W0O5RPlymg5MkcwQgPcmpjEcP1AER65EMxYGkLkdut28INEY1hyGDXbb8TBZtilTNhfJjDufUxTXAGxYNy4nelT4S3jcl~IU~AgfjY6KHHQmIgapbHDgjBoRWd3dBR8dtJlfMrjZ-Vg0VXq6afqVIqqADMc4IUOQ78LaMRX4GPOJ7G1o3wn~Eya60u73gceoL9mxIdsJ8nhAwvD0Xo1ei4ta2COsvZCTDA3geCh0zPofQ9znbtaZ1aJRtrNEGJ3MorQw4xn1YNEtqyfZd1a1ySFtjukh~OPGxengda5GrEdAuvr9-U6NJguy-A-bg7QDeVimZPwmJ9Q__'
          },
          post: {
            reactionCount: {
              total: 2,
              love: 1,
              pray: 0,
              raisingHands: 1,
              hug: 0,
              cry: 0,
              bookMarks: 0
            },
            commentCount: 0,
            comments: null,
            reactedType: null,
            id: 'vg9HuwM5W0UvfUO6ou6Hu',
            isSeeded: false,
            metadata: null,
            content: 'Why not create another post',
            latitude: null,
            longitude: null,
            creationDateTime: '2020-11-19T10:07:34.6154524Z',
            group: {
              id: null,
              name: null,
              profileImageId: null
            },
            taggedUsers: [],
            media: [
              {
                id: '0ga75YaSCTuCAS0nEFdK-',
                contentType: 'video/mp4',
                url: 'https://static.videezy.com/system/resources/previews/000/044/089/original/Line_Twirl_x264.mp4'
              }
            ]
          }
        },
        {
          creator: {
            id: '0tDTe3K79Sgc9dpGN22LArbx42m1',
            firstName: 'AviSam',
            lastName: 'Cb',
            currentCity: 'New York',
            currentState: 'NY',
            profilePhotoId: '0R5rcwy7jk-QX6H040Gzv',
            coverImageId: 'A16jeOOyCLUYqxRZxXkO4',
            coverImagePosition: {
              angle: 0,
              scale: 0.5725190839694657,
              h: 280,
              w: 1200,
              x: 0,
              y: 81,
              heightOfCanvas: 157,
              topPosition: -28
            },
            url: 'https://dlprenlpl0sal.cloudfront.net/0tDTe3K79Sgc9dpGN22LArbx42m1/0R5rcwy7jk-QX6H040Gzv_50*0.png?Expires=1606240351532&Key-Pair-Id=APKAIPV5WC3PMIYXF2NQ&Signature=ntIl1wIV1o-W0O5RPlymg5MkcwQgPcmpjEcP1AER65EMxYGkLkdut28INEY1hyGDXbb8TBZtilTNhfJjDufUxTXAGxYNy4nelT4S3jcl~IU~AgfjY6KHHQmIgapbHDgjBoRWd3dBR8dtJlfMrjZ-Vg0VXq6afqVIqqADMc4IUOQ78LaMRX4GPOJ7G1o3wn~Eya60u73gceoL9mxIdsJ8nhAwvD0Xo1ei4ta2COsvZCTDA3geCh0zPofQ9znbtaZ1aJRtrNEGJ3MorQw4xn1YNEtqyfZd1a1ySFtjukh~OPGxengda5GrEdAuvr9-U6NJguy-A-bg7QDeVimZPwmJ9Q__'
          },
          post: {
            reactionCount: {
              total: 1,
              love: 0,
              pray: 1,
              raisingHands: 0,
              hug: 0,
              cry: 0,
              bookMarks: 0
            },
            commentCount: 0,
            comments: null,
            reactedType: null,
            id: 's3gAb_HfPDLCkTHK1hJ8z',
            isSeeded: false,
            metadata: null,
            content: 'Hello, folks. I am doing good',
            latitude: null,
            longitude: null,
            creationDateTime: '2020-11-19T10:06:50.7774673Z',
            group: {
              id: null,
              name: null,
              profileImageId: null
            },
            taggedUsers: [
              {
                id: 'fi041UknL4broiKR3eOVheTKZnm2',
                firstName: 'Bipin',
                lastName: 'Paul',
                profilePhotoId: 'gTToPYHfOWmROWUVsI115',
                url: 'https://dlprenlpl0sal.cloudfront.net/fi041UknL4broiKR3eOVheTKZnm2/gTToPYHfOWmROWUVsI115_25*0.png?Expires=1606240354302&Key-Pair-Id=APKAIPV5WC3PMIYXF2NQ&Signature=pJwNNVzsfuIB7v1APm9yZkkw4ij33mi0Kvad36bbwwpbTiD81a5Gtzze2c7mNs9JNFF6KlJLe3B6dUYUzOHUrp07qlon8CfWSyk~IhQ~4LLvqRZAJDXPhdTXz0j-n4NB2hDrxx21doPIzCGz0URfQS~C0-8Xe0bKrefXS0BPCPhDnHr1h4LxLEoO~tgEZBWEy63BPJotmV83pUbaTZBVMHTuAjyAeA8hpQ6PnhS9K33qUlE8rKDtDfqV0IzB0vvw4p7HDBp-28DWTQlLxna76TmcHNOEUsWH3MTHjs3o40iSR0uo3O0QBHEGi~uRhhlp4PX7pCDFPuzRLH6GN7uhNw__'
              },
              {
                id: 'Xxc0mFgaAfR3BuLScEfQ6AbNBZ73',
                firstName: 'Sunday',
                lastName: 'Idiakose',
                profilePhotoId: 'vX_omNp6dHJYiPCZPmATO',
                url: 'https://dlprenlpl0sal.cloudfront.net/Xxc0mFgaAfR3BuLScEfQ6AbNBZ73/vX_omNp6dHJYiPCZPmATO_25*0.png?Expires=1606240354305&Key-Pair-Id=APKAIPV5WC3PMIYXF2NQ&Signature=OFjsMyGMwmXY3VunrNJ4RMam-jUX1wQq0fJ~bawyyb5nyRxUo94AKrsGR~CGJXSk1Mk9a0nIQmt3rEQHQ8EApzERDSXVFnIe4xvopNAv3tNY5oMFTLM-SWWGb-4aMkYYU3bHzbM8rkXXRvZ0xR0nwVhByzywFcuIIX46rKR2njrmoQeIi6U~qNyI1Pz8JetG5KFFI~wmxKXVE0fLVDIdVHhKBKAx-36VVosVvVGgVsiZZG6Uqi37mu0mSwhnmno2id9-D5XjKwvw6uXTuuicGJXELO7jVPLhQ~MJSkJfAHu6ulZ8U2wgrWHqMp6T6d7O7zbhZLIOYG~nxEjnyDOIug__'
              }
            ],
            media: [
              {
                id: 'dWHPX46oNa5K07IWbU3Lm',
                contentType: 'video/mp4',
                url: 'https://static.videezy.com/system/resources/previews/000/008/296/original/Young_African_American_Woman_Laughing_Dancing_2.mp4'
              }
            ]
          }
        },
        {
          creator: {
            id: 'Xxc0mFgaAfR3BuLScEfQ6AbNBZ73',
            firstName: 'Sunday',
            lastName: 'Idiakose',
            currentCity: 'Port Angeles',
            currentState: 'WA',
            profilePhotoId: 'vX_omNp6dHJYiPCZPmATO',
            coverImageId: '3-_RCCcjvi2cJT8WkG_QN',
            coverImagePosition: {
              angle: 0,
              scale: 0.9669621273166801,
              h: 280,
              w: 1200,
              x: 0,
              y: 317,
              heightOfCanvas: 461,
              topPosition: -113
            },
            url: 'https://dlprenlpl0sal.cloudfront.net/Xxc0mFgaAfR3BuLScEfQ6AbNBZ73/vX_omNp6dHJYiPCZPmATO_50*0.png?Expires=1606240351502&Key-Pair-Id=APKAIPV5WC3PMIYXF2NQ&Signature=XiHOjkiJhpRIQ2L9MGqp6DDPkO6DobcJQhnsh1y4S7nTvDCcdjKE-9dSzNyTp9s0v~RuHT1JZUXeyU-hNr~39YTHIsnZutTskt-1J~YVUvFsPq6rxaRR4B1JzA6rMGlXW6ezQpOJ2HJohiolvFHGz8Z4RFUFahnv6sklXq7TujJgdSyJLyh16rizng0nUZ6bpn8HHTLqrXFwpfhc8faB8RiKQz7LS39dfXZXffozoKj2MBNelLlONJ6~zBTUPnCSnuw0~o0ws~q9UJg38N7IKY9RJcha4S-tbFwPAAM~6JWTaj6aUhvA8ngwug7vvu3HeyaqppQ1HVVxOlgJbO323g__'
          },
          post: {
            reactionCount: {
              total: 0,
              love: 0,
              pray: 0,
              raisingHands: 0,
              hug: 0,
              cry: 0,
              bookMarks: 0
            },
            commentCount: 0,
            comments: null,
            reactedType: null,
            id: 'WJYNhci6Y1fBriUwNJXN_',
            isSeeded: false,
            metadata: null,
            content: 'Needs some text anyway',
            latitude: null,
            longitude: null,
            creationDateTime: '2020-11-19T09:16:07.4365824Z',
            group: {
              id: null,
              name: null,
              profileImageId: null
            },
            taggedUsers: [],
            media: [
              {
                id: 'm6wp6PM_SxrHAeq6FzhJu',
                contentType: 'image/png',
                url: 'https://dlprenlpl0sal.cloudfront.net/Xxc0mFgaAfR3BuLScEfQ6AbNBZ73/m6wp6PM_SxrHAeq6FzhJu.png?Expires=1606240352230&Key-Pair-Id=APKAIPV5WC3PMIYXF2NQ&Signature=AGO7bHfVRPEXvJpjPpD7gtjTy5cpfAyUBDqM54yMLg70osHJA1cmXtkUmYxcFlVbIImoBoYVQYUVHLcEhUjyKhqcuupZ1ExK~UQoIdTPJcVwLTB1Xkoc14JLFWBZ9LJhm~1qou5FmYc9M16m48j9b-~cc8F7S0cXS~32uJ~YOJjGtvaO6Em-IKBgAEY169NB437ftNi8LxPF-OVwhoV-vDNmqCipu4LaktOMhc82eyxa02WWnWYUAX5moe7CfCPYWaj80Qtz7PmOIz3oGtXjIX-USK48YDzX1-6~7OJmS6DjkDJGbUN7TW79mOf7U-rxiBB0zntcCqzLyGiDC4OyQw__'
              }
            ]
          }
        },
        {
          creator: {
            id: 'owZHdhGExiTq0N5O89AEKUGJgSu1',
            firstName: 'Joy',
            lastName: 'Sinha',
            currentCity: 'Sacramento',
            currentState: 'CA',
            profilePhotoId: 'cU95NacNxxVGAHwEKP2I6',
            coverImageId: 'kbBZrqPxpcqWK2xOIln3l',
            coverImagePosition: {
              angle: 0,
              scale: 0.3091190108191654,
              h: 280,
              w: 1200,
              x: 0,
              y: 190,
              heightOfCanvas: 236,
              topPosition: -68
            },
            url: 'https://dlprenlpl0sal.cloudfront.net/owZHdhGExiTq0N5O89AEKUGJgSu1/cU95NacNxxVGAHwEKP2I6_50*0.png?Expires=1606240351854&Key-Pair-Id=APKAIPV5WC3PMIYXF2NQ&Signature=pHz4QbYm7gfDC5TSfAD0i~DYJvEZKakyaUZudpeze45TRY0uuRQJsyPy-pbKk-GzQU7pe2Uaspr6Xi-cafBf8OuZd7H5yjuFxTkfsQAVVIQrZKDR7v-djwZBoKH9y8OnMRpGEUkAjc2ybaG-gNflOXgPsEskrZoiGsZKoqF9ohANypXFId6IvmrlezP7UMzBu4Wm8OXWpu7uL667S3NHwFyk7KFbpEP70MQQ1lHMd8OvnlReLNDk1cD6pKFvLoZRrJUDGjBBS7qlhe94ZRiVceys6I-~Sw~QhLZFH9A0H4cMjhqH2hmDGo3KJNsxSEPdunKcwJ1Ax5LwYrdNeMkf-w__'
          },
          post: {
            reactionCount: {
              total: 0,
              love: 0,
              pray: 0,
              raisingHands: 0,
              hug: 0,
              cry: 0,
              bookMarks: 0
            },
            commentCount: 0,
            comments: null,
            reactedType: null,
            id: 'FV5AeS-WjTlAvYUU4jq_-',
            isSeeded: false,
            metadata: null,
            content: 'Safari UI Photo Upload test',
            latitude: null,
            longitude: null,
            creationDateTime: '2020-11-17T08:04:54.5511125Z',
            group: {
              id: null,
              name: null,
              profileImageId: null
            },
            taggedUsers: [],
            media: [
              {
                id: '2OMcCHfw8CkOMrLOwQ8C2',
                contentType: 'image/png',
                url: 'https://dlprenlpl0sal.cloudfront.net/owZHdhGExiTq0N5O89AEKUGJgSu1/2OMcCHfw8CkOMrLOwQ8C2.png?Expires=1606240353088&Key-Pair-Id=APKAIPV5WC3PMIYXF2NQ&Signature=gpBItZJoivyhdnLu4mMf2BdUyrelZ79ars11VzGa84jn~zSEh8wxeGAkzwcTg04SGjRoVWdfzIa4ZorIuKR7YokJ9C6R~VUjNiUyHPT1tur1JRFTL~lkGArK67ZZnMbojFFn2h41zJe6JDBVHLoD4rGUjlOp6efOOXPBCkAj2A0rkYp4AeXwC8bzXt29RZcp43U2Y9EzROH6i18aCQi2iiFMzio8W9O8KYt6wFWo4ebnZRNsn38PKeavqrgxXZPmqpGA0HQl3fvHggvcHQ~fFMWXFO10AkZaW-u0lbTptFsLBJ9o30nd~82wh4hz31VVgYumpmdXKCe2lJ2flSpoVQ__'
              }
            ]
          }
        },
        {
          creator: {
            id: 'Xxc0mFgaAfR3BuLScEfQ6AbNBZ73',
            firstName: 'Sunday',
            lastName: 'Idiakose',
            currentCity: 'Port Angeles',
            currentState: 'WA',
            profilePhotoId: 'vX_omNp6dHJYiPCZPmATO',
            coverImageId: '3-_RCCcjvi2cJT8WkG_QN',
            coverImagePosition: {
              angle: 0,
              scale: 0.9669621273166801,
              h: 280,
              w: 1200,
              x: 0,
              y: 317,
              heightOfCanvas: 461,
              topPosition: -113
            },
            url: 'https://dlprenlpl0sal.cloudfront.net/Xxc0mFgaAfR3BuLScEfQ6AbNBZ73/vX_omNp6dHJYiPCZPmATO_50*0.png?Expires=1606240351502&Key-Pair-Id=APKAIPV5WC3PMIYXF2NQ&Signature=XiHOjkiJhpRIQ2L9MGqp6DDPkO6DobcJQhnsh1y4S7nTvDCcdjKE-9dSzNyTp9s0v~RuHT1JZUXeyU-hNr~39YTHIsnZutTskt-1J~YVUvFsPq6rxaRR4B1JzA6rMGlXW6ezQpOJ2HJohiolvFHGz8Z4RFUFahnv6sklXq7TujJgdSyJLyh16rizng0nUZ6bpn8HHTLqrXFwpfhc8faB8RiKQz7LS39dfXZXffozoKj2MBNelLlONJ6~zBTUPnCSnuw0~o0ws~q9UJg38N7IKY9RJcha4S-tbFwPAAM~6JWTaj6aUhvA8ngwug7vvu3HeyaqppQ1HVVxOlgJbO323g__'
          },
          post: {
            reactionCount: {
              total: 0,
              love: 0,
              pray: 0,
              raisingHands: 0,
              hug: 0,
              cry: 0,
              bookMarks: 0
            },
            commentCount: 0,
            comments: null,
            reactedType: null,
            id: '8P0iAmAKZgwBmjgRUCDLv',
            isSeeded: false,
            metadata: null,
            content: 'Testing extra space issue on Safari again.\nThis time from a newly created post',
            latitude: null,
            longitude: null,
            creationDateTime: '2020-11-16T03:26:21.8085248Z',
            group: {
              id: null,
              name: null,
              profileImageId: null
            },
            taggedUsers: [],
            media: [
              {
                id: '5tGWIytSF23Igb6_X5DSH',
                contentType: 'image/png',
                url: 'https://dlprenlpl0sal.cloudfront.net/Xxc0mFgaAfR3BuLScEfQ6AbNBZ73/5tGWIytSF23Igb6_X5DSH.png?Expires=1606240353092&Key-Pair-Id=APKAIPV5WC3PMIYXF2NQ&Signature=rdHQO4LaNaHoGaHYqI-ChWQUDJfz4~rgzIAPsFchOaVSOAOuY9xmFFgxgxj~ZxGeMl~JVgCwwBaV-3cOKEed4ZFc~kdUfApPO6W5h8AL1edB0Z9GOD-5mpJgaRHWL8P-DHhA6KT3MOtlO0e9MVsXmjv7Y-Oe8Y6acQKlIUybuQtCo9YXMSwM5jqpYPViKwKONtiPrH7IOHsZlZShpQUKoiv0wi5R7B9bWEASIh6Q4IfSOeDHh-LaWHf3Kd-t3T-UJtERYyaw-~iQmGqQeHrFeTrr7rPWZAgLk7OGQe293Y~LUf0x865qA6i5wr-~h8Fnh0vhKau8mMfNWz9YVobYYA__'
              }
            ]
          }
        },
        {
          creator: {
            id: 'fi041UknL4broiKR3eOVheTKZnm2',
            firstName: 'Bipin',
            lastName: 'Paul',
            currentCity: 'Port Angeles',
            currentState: 'WA',
            profilePhotoId: 'gTToPYHfOWmROWUVsI115',
            coverImageId: '1Qt62WIKYWIAdWhP2AUNR',
            coverImagePosition: {
              angle: 0,
              scale: 0.625,
              h: 350,
              w: 1200,
              x: 0,
              y: 12,
              heightOfCanvas: 107,
              topPosition: -3
            },
            url: 'https://dlprenlpl0sal.cloudfront.net/fi041UknL4broiKR3eOVheTKZnm2/gTToPYHfOWmROWUVsI115_50*0.png?Expires=1606240351860&Key-Pair-Id=APKAIPV5WC3PMIYXF2NQ&Signature=dw~awW8Z-zP1VOVhu4LVIS6bGBgr2DAwR-AoaKQedKhQGc~c3ukJUwS6pWOgbmDaQlKlfyfIfc4sEcC7J~i4s3KVt5FeJeDWwFkr5BSh8Gt0gU~FPpJ8MFTTaLCji2pdgimnOrWMenbafrznp~~CYLyCZlCWRdex~dsYVdRXsZqd0JQQqKnf2W-EUCkx1kjaKdd0MFYIvoMkpZVBHrAOrFshj9QfhRGcbioN1YUiH7ejTbQNDFbFjMJUUUfhk-xWDwCsZoV0VgobIHfCe4c27Mk-Q4C-4qOvl6pxAmpGyxvWXtR4Mk-99SAFEaudQ7mJxnLZN~7DcvSyqECwy8ZtWQ__'
          },
          post: {
            reactionCount: {
              total: 3,
              love: 1,
              pray: 0,
              raisingHands: 1,
              hug: 0,
              cry: 0,
              bookMarks: 1
            },
            commentCount: 1,
            comments: [
              {
                reactionCount: {
                  total: 3,
                  love: 0,
                  pray: 2,
                  raisingHands: 0,
                  hug: 1,
                  cry: 0,
                  bookMarks: 0
                },
                reactedType: null,
                id: 'G6yQo4kIf7rYZyHaydMCY',
                content: 'Happy Diwali',
                creationDateTime: '2020-11-16T12:41:47.0140281Z',
                creator: {
                  id: 'owZHdhGExiTq0N5O89AEKUGJgSu1',
                  firstName: 'Joy',
                  lastName: 'Sinha',
                  currentCity: 'Sacramento',
                  currentState: 'CA',
                  profilePhotoId: 'cU95NacNxxVGAHwEKP2I6',
                  coverImageId: 'kbBZrqPxpcqWK2xOIln3l',
                  coverImagePosition: {
                    angle: 0,
                    scale: 0.3091190108191654,
                    h: 280,
                    w: 1200,
                    x: 0,
                    y: 190,
                    heightOfCanvas: 236,
                    topPosition: -68
                  },
                  url: 'https://dlprenlpl0sal.cloudfront.net/owZHdhGExiTq0N5O89AEKUGJgSu1/cU95NacNxxVGAHwEKP2I6_50*0.png?Expires=1606240354654&Key-Pair-Id=APKAIPV5WC3PMIYXF2NQ&Signature=pKavjyv6wj6iTyz5Ve8Ji8q-udZ-4CC4E-3ztt-CsggQlIDQbIWD0NiMwm1Vh5Fqezps9ldAl2fHPHjB94C1yzSZfaR~gbbZAfp0vS5RGCr0dPWxck7tE8g67V8Jh3sIGskEprc0LhEaHxfAWiZhmY-XFn5mYfIpbHXQnhdOldVy2bzpY9h-9SZ~TTuRRAySP9tmKBINvJz4gSXUWzqlBpuBaDB~N2UYvAXD0HqyouSgQJaiDcED78f90oRwynXWnvMod8mRmuBuZRDpNoFWwz2T~leWpfFd44VuPF2Y3z-J9hvF9SvoRZak~DY4dl9CNTUjKaZ5rnk2PXJVT5UysQ__'
                },
                media: null,
                taggedUsers: []
              }
            ],
            reactedType: null,
            id: 'E1Mq-zjnFMSZCXe1G8UN7',
            isSeeded: false,
            metadata: null,
            content: 'Happy Diwali to everyone those who celebrate 🪔🕯🪔🪔🪔🕯🪔🪔',
            latitude: null,
            longitude: null,
            creationDateTime: '2020-11-14T11:02:23.8716767Z',
            group: {
              id: null,
              name: null,
              profileImageId: null
            },
            taggedUsers: [
              {
                id: 'owZHdhGExiTq0N5O89AEKUGJgSu1',
                firstName: 'Joy',
                lastName: 'Sinha',
                profilePhotoId: 'cU95NacNxxVGAHwEKP2I6',
                url: 'https://dlprenlpl0sal.cloudfront.net/owZHdhGExiTq0N5O89AEKUGJgSu1/cU95NacNxxVGAHwEKP2I6_25*0.png?Expires=1606240354307&Key-Pair-Id=APKAIPV5WC3PMIYXF2NQ&Signature=HuH7DGymE5LEoYHGcztO6yXzXk8WxvWpTG-WINio9jM5mv2qA5I4SfCm1FLJJQcCl8s8x0nFtzmTRqzQDD4ZKuw21dpsGy1ojDRZi5PArPGL8jP3FEzZqgbU9Ru18i-W~zeUx8d-~JyPQbnwu~UaGmOUhrRbo5B7yYHBlfzcUa4Dfco1lgpINHGD9XwRBuLnoYaZMgcC7Y4QwpfuaTTgcmZlttJFIYIi4iLgAl-jQRUuMVfo7JgQQHeAbwTv5DeyCJY8uoVl7cDfHW3GXLB5lHt00v17iLgKa9DieaU856rtW15ePSVezSJbu~ONvV09CZm9GvgoMy04d5rpP37MVw__'
              },
              {
                id: '8FzTyWjKvMZdbhbPL5vK6SEwTvU2',
                firstName: 'AVI IPL',
                lastName: 'Sam',
                profilePhotoId: 'riduo5i7fKeJSdirYREDT',
                url: 'https://dlprenlpl0sal.cloudfront.net/8FzTyWjKvMZdbhbPL5vK6SEwTvU2/riduo5i7fKeJSdirYREDT_25*0.png?Expires=1606240354310&Key-Pair-Id=APKAIPV5WC3PMIYXF2NQ&Signature=RYFw4~vGhASoyw9YQ8dWkEk5QVyQrM5uHdrLFQ5lt1JjAZsOYvd89Vfauer9WbT8nLrDgfHLTSIx0mZAeLmGmgtluqnmI53-ThKQz5K~~~jw08mw8K~reXNe0EF0ayQjwZ5mXs-XWZh32dIhtzH51WlC~FpY6Hn9g05YbCMZElW69Jv598QHadSxgyI1hyQYCk0UgHCp0qQCIWXlvvUDjrRDMrzl0aD-JbLcPH8TYbZMIR3T40oLLcu47i4zoQwRQH4pzXi1gh6XAQ3TZUebg-O1iphj-VN4lhK6td6Ys1dWoVhFGYAk4XwjyMQC-KXPikTWf6uJiUwd2OEqv8VQ~Q__'
              }
            ],
            media: [
              {
                id: 'f06Xsdd27F4bx87uVODSn',
                contentType: 'image/png',
                url: 'https://dlprenlpl0sal.cloudfront.net/fi041UknL4broiKR3eOVheTKZnm2/f06Xsdd27F4bx87uVODSn.png?Expires=1606240353094&Key-Pair-Id=APKAIPV5WC3PMIYXF2NQ&Signature=u4MOrDWkmyALHJeupHOquxeuJP3I6plDtXCmXo0KNUZUMk~Lc9gv81BR3d~nR6g3EyCgOxuGK1aDWGD1MZD8xxw~tJnw~xFTlz8-RcOaNxIDTY-erSCtXQDzvCwcBryiXT5twI2QJXGUOF0YG2eFLG7NDY9d0gZTIkRczKc154bIJVEaL7YTQ6gcFwpbN4zQxnmzMBLR6~O7M3odKbOLQyv15xmp7dv2Em4yZ229EExYaHGq-DQH~iDY5pKzs1ssZptAL6-Gqb9xAN5UnfBrOXsIevVOUvuc~U6KzPfvwWHX8sxmpsJ02tIALqCEkg7eUexsovd3HDWM26IO189iHA__'
              }
            ]
          }
        }
      ]
    });
  }

}
