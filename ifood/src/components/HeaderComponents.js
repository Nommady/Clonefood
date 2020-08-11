import React from 'react'
import styled from 'styled-components'


const Headers = styled.header`
    display:flex;
    align-items:center;
    flex-direction: column;
    padding:10px
`

const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content:flex-end;
    padding: 10px;
    width:100%
`
const List = styled.ul`
    list-style-type: none;
    display: flex;
`;
const Li = styled.li`
    padding:10px 30px
 `
const Links = styled.a`
    text-decoration:none;
    color: #222;
    :hover{
        color:#ff0000
    }
 `
const Logos = styled.div`
    width:200px;
    margin: 50px;
    justify-content:center
`
const Buttons = styled.button`
 background-color:#fff;
 font-size:20px;
 color: #ff0000;
 width: 150px;
 height: 50px;
 margin-top:10px;
 border: solid 1px #bbb;
 border-radius:3px;
 :hover{
     background-color:#ff0000;
     color: #fff
 }
`
const Title = styled.h2`
 font-size:42px
`;
const Highlight = styled.em`
 color: #ff0000;
 font-style:none;
`;

export {
    Headers,
    Nav,
    List,
    Li,
    Links,
    Logos,
    Buttons,
    Title,
    Highlight,
}