import ChatList from '../../components/ChatList/ChatList';
import fsPromises from 'fs/promises';
import path from 'path'
import ChatRoom from '../../components/ChatRoom/ChatRoom';
import ChatDetails from '../../components/ChatDetails/ChatDetails';

export default function ChatHome({ rooms }) {
    return <div className='flex'>
        <div className='flex-none'>
            <ChatList items={rooms}></ChatList>
        </div>
        <div className='flex-1'>
            <ChatRoom ></ChatRoom>
        </div>
        <div className='flex-none'>
            <ChatDetails></ChatDetails>
        </div>
    </div>

}

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'public/data/data.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);
    return {
        props: objectData
    }
}
