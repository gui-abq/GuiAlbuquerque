import React from 'react'
import {ProfileContainer,ProfilePic,ProfileStatus} from './styled'
import MyPic from '../../../img/mypic.png'



export class ProfileCard extends React.Component {
    render (){
        return (

            <ProfileContainer>
               <ProfilePic src={MyPic}/>
               <ProfileStatus/>
            </ProfileContainer>
        )}
}