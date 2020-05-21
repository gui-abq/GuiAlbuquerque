import React from 'react'
import { ProfileCard } from './profileCard/ProfileCard.js'
import styled from 'styled-components'
import { UsersProfile } from './UsersProfile/usersProfile.js'

const MenuContainer = styled.div `

    width: 402px;
    height: 729px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 20px;
    justify-content: center;
`

export class UsersMenu extends React.Component {
    render (){
        return (
            <MenuContainer>

                <ProfileCard/>
                <UsersProfile/>
                <UsersProfile/>
                <UsersProfile/>
                <UsersProfile/>

                
            </MenuContainer>
            )
    }
}