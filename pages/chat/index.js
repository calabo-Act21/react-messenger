import ChatList from '../../components/ChatList/ChatList';
import fsPromises from 'fs/promises';
import path from 'path'
import ChatRoom from '../../components/ChatRoom/ChatRoom';
import ChatDetails from '../../components/ChatDetails/ChatDetails';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function ChatHome(props) {
    return <div className='flex'>
        <div className='flex-none'>
            <ChatList items={props.data.rooms}></ChatList>
        </div>
        <div className='flex-1'>
            <ChatRoom></ChatRoom>
        </div>
        <div className='flex-none'>
            <ChatDetails></ChatDetails>
        </div>
    </div>
}

export async function getStaticProps({ locale }) {
    const filePath = path.join(process.cwd(), 'public/data/data.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);
    return {
        props: { data: objectData, ...(await serverSideTranslations(locale, ['common', 'chat'])) }
    }
}
