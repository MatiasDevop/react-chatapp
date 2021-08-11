import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    return (
        <ChatEngine 
            height="100vh"
            projectID="80750479-02f9-42c1-8991-d710566ff4bb"
            userName="sacsim"
            userSecret="123123"
            renderChatFeed={(chatAppProps) =><ChatFeed {... chatAppProps} />}
        />
    )
}
export default App;