import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    width: 100%;
    height: 100vh;
    font-family: 'Montserrat';
    font-size: 12px;
    overflow: hidden;
  }

  ul {
    list-style: none;
  }

  .nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 20px;
    text-transform: uppercase;
    font-weight: 600;
  }

  .logo {
    font-size: 40px;
  }

  .menu-links ul li {
    display: inline-block;
    padding-right: 20px;
  }

  .search,
  .cart {
    font-size: 20px;
  }

  .content {
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    z-index: -1;
  }

  .title {
    flex: 0 0 100%;
    font-size: 200px;
    text-transform: uppercase;
    font-weight: 700;
  }

  .tagline {
    flex: 1;
    font-size: 30px;
    color: #999;
  }

  .pages {
    flex: 0;
    letter-spacing: 5px;
    color: #999;
  }

  .pages span {
    font-size: 60px;
    color: #000;
    font-weight: 600;
  }

  .more {
    flex: 1;
  }

  .more a {
    text-decoration: none;
    font-size: 20px;
    color: #fff;
    background: #000;
    padding: 10px 30px;
    border-radius: 10px;
  }

  .desc {
    flex: 0 0 32%;
  }

  .desc p:nth-child(1) {
    font-size: 30px;
    margin-bottom: 20px;
  }

  .desc p:nth-child(2) {
    line-height: 2;
  }

  .desc span {
    color: #AECD31;
  }

  .juice {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
  }

  .juice img {
    animation: float 4s ease-in-out infinite;
    max-height: 600px;
  }

  @keyframes float {
    0% {
      transform: translate(-50%, -46%);
    }
    50% {
      transform: translate(-50%, -54%);
    }
    100% {
      transform: translate(-50%, -46%);
    }
  }

  .leaves {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: -1;
  }

  .leaves img {
    max-width: 100%;
    max-height: 100%;
  }

  .arrows .prev {
    position: absolute;
    top: 50%;
    left: 100px;
  }

  .arrows .next {
    position: absolute;
    top: 50%;
    right: 100px;
  }

  .arrows button {
    border: 1px solid #999;
    background: transparent;
    padding: 20px;
    border-radius: 50%;
    outline: none;
  }

  .arrows button:hover {
    color: #fff;
    background: #000;
  }
`