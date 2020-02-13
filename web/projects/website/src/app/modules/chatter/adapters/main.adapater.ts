import { ChatAdapter, IChatGroupAdapter, User, Group, Message, ChatParticipantStatus, ParticipantResponse, ParticipantMetadata, ChatParticipantType, IChatParticipant } from 'ng-chat';
import { Observable, of } from 'rxjs';
import { delay } from "rxjs/operators";

export class MainAdapter extends ChatAdapter implements IChatGroupAdapter {
  public static mockedParticipants: IChatParticipant[] = [
    {
      participantType: ChatParticipantType.User,
      id: 1,
      displayName: "Fatima abdelhak",
      avatar: "https://66.media.tumblr.com/avatar_9dd9bb497b75_128.pnj",
      status: ChatParticipantStatus.Online
    },
    {
      participantType: ChatParticipantType.User,
      id: 2,
      displayName: "achraf abdelhak",
      avatar: null,
      status: ChatParticipantStatus.Away
    },
    {
      participantType: ChatParticipantType.User,
      id: 3,
      displayName: "ikram lfakir",
      avatar: "https://68.media.tumblr.com/avatar_d28d7149f567_128.png",
      status: ChatParticipantStatus.Busy
    },
    {
      participantType: ChatParticipantType.User,
      id: 4,
      displayName: "siham abzou",
      avatar: "https://pbs.twimg.com/profile_images/600707945911844864/MNogF757_400x400.jpg",
      status: ChatParticipantStatus.Offline
    },
    {
      participantType: ChatParticipantType.User,
      id: 5,
      displayName: "hajar hakkoum",
      avatar: "https://pbs.twimg.com/profile_images/378800000449071678/27f2e27edd119a7133110f8635f2c130.jpeg",
      status: ChatParticipantStatus.Offline
    },
    {
      participantType: ChatParticipantType.User,
      id: 6,
      displayName: "fati fati",
      avatar: "https://pbs.twimg.com/profile_images/378800000243930208/4fa8efadb63777ead29046d822606a57.jpeg",
      status: ChatParticipantStatus.Busy
    },
    {
      participantType: ChatParticipantType.User,
      id: 7,
      displayName: "Mouad Ziani",
      avatar: "https://pbs.twimg.com/profile_images/3456602315/aad436e6fab77ef4098c7a5b86cac8e3.jpeg",
      status: ChatParticipantStatus.Busy
    },
    {
      participantType: ChatParticipantType.User,
      id: 8,
      displayName: "Lorde Petyr 'Littlefinger' Baelish",
      avatar: "http://68.media.tumblr.com/avatar_ba75cbb26da7_128.png",
      status: ChatParticipantStatus.Offline
    },
    {
      participantType: ChatParticipantType.User,
      id: 9,
      displayName: "Sansa Stark",
      avatar: "http://pm1.narvii.com/6201/dfe7ad75cd32130a5c844d58315cbca02fe5b804_128.jpg",
      status: ChatParticipantStatus.Online
    },
    {
      participantType: ChatParticipantType.User,
      id: 10,
      displayName: "Theon Greyjoy",
      avatar: "https://thumbnail.myheritageimages.com/502/323/78502323/000/000114_884889c3n33qfe004v5024_C_64x64C.jpg",
      status: ChatParticipantStatus.Away
    }];

  listFriends(): Observable<ParticipantResponse[]> {
    return of(MainAdapter.mockedParticipants.map(user => {
      let participantResponse = new ParticipantResponse();

      participantResponse.participant = user;
      participantResponse.metadata = {
        totalUnreadMessages: Math.floor(Math.random() * 10)
      }

      return participantResponse;
    }));
  }

  getMessageHistory(destinataryId: any): Observable<Message[]> {
    let mockedHistory: Array<Message>;

    mockedHistory = [
      {
        fromId: 1,
        toId: 999,
        message: "Hi there, just type any message bellow to test this Angular module.",
        dateSent: new Date()
      }
    ];

    return of(mockedHistory).pipe(delay(2000));
  }

  sendMessage(message: Message): void {
      console.log(message);
  }

  groupCreated(group: Group): void {
      console.log(group);
    MainAdapter.mockedParticipants.push(group);

    MainAdapter.mockedParticipants = MainAdapter.mockedParticipants.sort((first, second) =>
      second.displayName > first.displayName ? -1 : 1
    );

    // Trigger update of friends list
    this.listFriends().subscribe(response => {
      this.onFriendsListChanged(response);
    });
  }
}
