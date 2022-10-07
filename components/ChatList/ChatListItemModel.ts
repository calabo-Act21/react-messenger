export class ChatListItemModel {
    id: string;
    name: string;
    avatar: string;
    lastMessage: string;

    constructor(data: any) {
        this.id = data.id;
        this.name = data.name;
        this.avatar = data.avatar;
        this.lastMessage = data.lastMessage;
    }
}