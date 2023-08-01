import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { UserDetails } from './context/UserContext';
import { ModalProvider } from './context/ModalContext';
import { NewTaskProvider } from './context/NewTaskContent';
import { CollectionTaskProvider } from './context/ColectionTaskContext';
import { DetailTaskProvider } from './context/DetailsTasks';
import { StatusTaskProvider } from './context/StatusTasksContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UserDetails>
      <ModalProvider>
        <NewTaskProvider>
          <CollectionTaskProvider>
            <DetailTaskProvider>
              <StatusTaskProvider>
                <App />
              </StatusTaskProvider>
            </DetailTaskProvider>
          </CollectionTaskProvider>
        </NewTaskProvider>
      </ModalProvider>
    </UserDetails>
  </React.StrictMode>,
);
