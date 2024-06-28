import styled from "styled-components";

export const MainWrapper = styled.div`
  height: 100vh;
  background: linear-gradient(to right, #67b26f, #4ca2cd);
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background-color: #ffffff;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
    color: rgba(0, 0, 0, 0.8);
    text-align: center;
    max-width: 600px;
    width: 90%;
  }

  .searchArea {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .searchArea > input {
    outline: none;
    border: none;
    border: 1px solid #ccc;
    padding: 12px;
    border-radius: 20px;
    text-align: center;
    width: 80%;
    background: #f0f0f0;
    font-size: 1rem;
  }

  .searchCircle {
    border: 1px solid #ccc;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-left: 10px;
  }

  .searchCircle > .searchIcon {
    font-size: 20px;
    color: #666;
  }

  .weatherArea {
    margin-top: 30px;
    text-align: center;
  }

  .weatherArea > .icon {
    font-size: 6rem;
    color: #4ca2cd;
  }

  .weatherArea > h1 {
    font-size: 3rem;
    font-family: "Bebas Neue", sans-serif;
    margin: 10px 0;
  }

  .weatherArea > span {
    font-family: "Inter", sans-serif;
    color: #666;
  }

  .weatherArea > h2 {
    font-size: 1.5rem;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    margin-top: 10px;
    color: #888;
  }

  .bottomInfoArea {
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-family: "Josefin Sans", sans-serif;
    margin-top: 30px;
    background: #f0f0f0;
    border-radius: 12px;
    padding: 10px;
    color: #555;
  }

  .humidityLevel,
  .wind {
    display: flex;
    align-items: center;
    margin: 0 20px;
  }

  .humidIcon {
    font-size: 2rem;
    color: #4ca2cd;
    margin-right: 5px;
  }

  .windIcon {
    font-size: 2rem;
    color: #4ca2cd;
    margin-right: 5px;
  }

  .loading {
    height: 400px;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }

  .loadingIcon {
    font-size: 3rem;
    animation: spin 2s linear infinite;
  }

  p {
    font-size: 1.2rem;
    margin-top: 10px;
    font-family: "Josefin Sans", sans-serif;
    color: #888;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
