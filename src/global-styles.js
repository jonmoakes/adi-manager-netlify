import { createGlobalStyle } from "styled-components";
import BackgroundImage from "./assets/header/adi-logo.png";

export const GlobalStyle = createGlobalStyle`
    html {
        width:100%;
        background-color:#247AFD;
    }
    body {
        margin: 0px auto 100px auto;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight:bold;
        width:100%;
        text-align:center;
        text-shadow: 1px 1px 1px black;
        text-transform:capitalize;
        position: relative;
        &:before {
            content: "";
            display: block;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            height: 100%;
            z-index: -10;
            background: linear-gradient(
                rgba(32, 153, 240, 0.6),
                rgba(32, 153, 240, 0.6)
              ),
              url(${BackgroundImage}) no-repeat center center;
              -webkit-background-size: center;
              -moz-background-size: center;
              -o-background-size: center;
              background-size: contain;
        }
        h2 {
            color:white;
            text-decoration:underline;
        }
        p {
            font-size:18px;
            text-shadow:none;

            @media screen and (max-width:320px) {
                font-size:16px;
            }
        }
        a {
            color:#247AFD;
            text-decoration: none;
            text-shadow:1px 1px 1px black;
            &:hover {
                color:white;
               
            }
        }
        ul {
            padding-left: unset;
            display: table;
            margin: 0 auto;
            font-size:18px;
            @media screen and (max-width:1024px) {
                list-style-type: none;
            }
        }
          
        li {
            margin-bottom: 10px;
            text-shadow:none;
            color:#cc1616;
        }
        hr {
            border-top:6px solid black;
            border-radius: 5px;
            width:70%;
        }
    }
`;
