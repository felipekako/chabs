import React from "react";
import { auth, provider } from "../../services/firebase";
import * as C from"./styled";

const login = () => {
    const handlesignin = () => {
        auth.signInWithPopup(provider).catcha(alert);
    }
    retrun (
        <C.Container>
            <C.Button onClick={handlesignin}>Login com Gooogle</C.Button>
        </C.Container>
    );

}; 

export default login;