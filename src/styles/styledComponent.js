import styled from 'styled-components';

export const TopBarButtonsContainer = styled.div`
  margin: auto;
  display: table;
  margin-top: 30px;
`;

export const GameButton = styled.div.attrs({
  className: '.btn-default'
})`
  background-color: #545976;
  color: #b6b6d2;
  font-weight: 600;
  font-size: 14px;
  border-color: #3badf3;
  border: 2px solid;
  border-radius: 37px;
  padding: 8px 30px;
  cursor: pointer;
`;

export const GridContainer = styled.div`
  width: 150px;
  line-height: 0;
  margin: auto;
  box-shadow: 0px 0px 20px white;
  margin-top: 20px;
`;

export const GameLabel = styled.h1`
  color: #3badff;
  background-color: #2d314e;
  font-weight: 600;
  height: 70px;
  text-align: center;
  vertical-align: middle;
  padding: 11px;
  clear: both;
  margin: 2% 0% auto;
  width: 100%;
`;

export const GameInfo = styled.h2`
    background-color: #2d314e;
    color: #3badff;
    width: 40%;
    font-size: 16px;
    font-weight: 600;
    height: 40px;
    padding: 10px;
    text-align: center;
    text-transform: uppercase;
    font-style: italic;
`;

