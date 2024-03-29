import styled from 'styled-components';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const Container = styled.div`
  width: 100vw;
  padding: 70px 40px;
`;

export const WelcomeMsg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  > p {
    font-weight: 500;
    padding-bottom: 8px;
    color: #666464;
    .nickname {
      color: black;
      font-weight: 900;
      font-size: 18px;
    }
  }
  > .mat-icon {
    font-size: 45px;
    margin-bottom: 10px;
  }
`;

export const Line = styled.hr`
  width: ${props => props.widthLength};
  background: #1ca82a;
  border-radius: 15px;
  border: 0;
  height: 7px;
`;
export const Subtitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    margin-bottom: 10px;
    font-size: 18px;
  }
  > div {
    width: 25%;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > p {
      font-size: 18px;
      cursor: pointer;
      &:hover {
        font-weight: 900;
        font-size: 18px;
        color: #1ca82a;
      }
    }
  }
`;
export const AccountIcon = styled(AccountCircleIcon)`
  color: #1ca82a;
`;

export const MenuTab = styled.div`
  width: 55%;
  margin: 50px auto;
  font-size: 20px;
  text-align: center;
  font-weight: 600;
  > .tabs {
    display: flex;
    > li {
      width: 100%;
      text-align: center;
      border: 1px solid #b1b1b1;
      padding: 20px;
      cursor: pointer;
      color: #b1b1b1;

      &:hover {
        font-weight: 900;
        border-bottom: none;
        color: black;
      }
    }
  }
`;

export const ShowList = styled.div`
  padding: 30px;
  width: 40%;
  margin: 50px auto;
  text-align: center;
  color: #666464;
  border-radius: 20px;
  background-color: #e7ffd6;
`;
