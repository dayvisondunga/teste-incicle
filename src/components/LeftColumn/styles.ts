import styled from 'styled-components';

export const Container = styled.div`
  .card{
    display: flex;
    margin-bottom: 0.6em;
    border: 1px solid #70707079;
    box-shadow: 0px 2px 2px #00000027;
    border-radius: 15px !important;
  }
  main{
    background-color: #f2f2f2;
  }
  .img-card{
    width: 150px;
    margin: 20px;
    padding-right: 1;
  }
  .type{
    background-color: #3489b1;
    color: #ffff;
    font-weight: bold;
    padding: 2px 5px 2px;
    font-size: 0.9em;
  }
  .type2{
    background-color: #ee8686;
    color: black;
    font-weight: bold;
    padding: 2px 5px 2px;
    font-size: 0.9em;
  }
  .vazia{
    flex-grow: 1;
  }
  .moreButton{
    margin-right: 0.6em;
    color: #707070;
    background-color: #DBDBDB;
    border-radius: 20px ;
  }
  .rightBlock{
    margin-bottom: 0.6em;
  }

  .quadros{
    background-color: white;
    border-radius: 3px;
  }

  .quadrosInnerContainer{
    padding: 1.2em;
    align-items: center;
    align-content: center;
  }

  .quadro{
    background-color: #f2f2f2;
    border: 1px solid #d9d9d9;
    padding-top: 0.4em;
    padding-left: 0.1em;
    padding-right: 0.1em;
    padding-bottom: 0.1em;
    margin-bottom: 0.3em;
    overflow-x: scroll;
  }

  .rightBlockBtn{
    padding: 0;
  }

  .imgRightBlock{
    width: 50px;
    height: 50px;
    object-fit: cover;
  }

`;
