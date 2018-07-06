import styled from 'styled-components';

export const TopBarButtonsContainer = styled.div`
  margin: 2% auto auto;
  clear: both;
  width: 29%;
  display: flex;
  flex-direction: row;
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
  padding: 8px 20px;
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
  margin: 1% 0% auto;
  width: 100%;
`;

export const GameContainer = styled.div`
    margin: 0 auto auto;
    width: 65em;
    display: flex;
    flex-direction: row;
`;

export const Grid = styled.div`
  clear: both;
  margin: 0 auto;
`;

export const ModeButtons = styled.div`
  margin-left: -2em;
  width: 24%;
`;

export const SpeedButtons = styled.div`
  display: flex;
  margin-left: 20em;
`;

export const GameInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GameLabels = GameInfo.extend`
    width: 40%;
    font-size: 16px;
    font-weight: 600;
    padding: 10px;
    text-align: center;
    text-transform: uppercase;
    font-style: italic;
    height: 10em;
    width: 10em;
    background-color: #2d314e;
`;

export const GenerationLabel = GameInfo.extend`
  color: #FFEB3B;
`;

export const GameStatusLabel = GenerationLabel.extend`
   margin-top: 26%;
`;

export const SideOptionsContainer = GameInfo.extend`
  margin: 10% 0%;
`;

export const TitleLabel = styled.span`
  text-decoration: underline;
`;