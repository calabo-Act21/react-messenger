import ChatList from '../../components/ChatList/ChatList';
import fsPromises from 'fs/promises';
import path from 'path'

export default function ChatHome({ rooms }) {
    return <ChatList items={rooms}></ChatList>
}

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'public/data/data.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);
    return {
        props: objectData
    }
}
