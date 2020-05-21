import React from 'react'
import {ProfileContainer, ProfilePic, StatusContainer} from './style'
import DanielPic from '../../../img/harryprofile.png'


export class UsersProfile extends React.Component {
    render (){
        return (

            <ProfileContainer>
                
                <ProfilePic src={DanielPic}/>
                <StatusContainer>
                    Did you see my glasses?
                </StatusContainer>
                
            </ProfileContainer>            
            )
    }
}