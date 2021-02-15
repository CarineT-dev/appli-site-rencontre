// fonction qui renvoit du 

import Profile from '../stores/Profile';
import { observer } from 'mobx-react';

export const Modal = observer(() => <h2>
    MODAL {JSON.stringify(Profile.modalState.isOpen)}
    <button onClick={Profile.showModal}>Passe à true</button>
    <button onClick={Profile.closeModal}>Passe à false</button>
    </h2>
);
