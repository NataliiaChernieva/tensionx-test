import styled from '@emotion/styled';

export const SiteHeader = styled.div`
display: flex;
justify-content: space-between;
height: 60px;
width: 1360px;
text-transform: uppercase;
font-weight: 400;
font-size: 14px;
line-height: 140%;
border-bottom: 2px solid black;
`;

export const HeaderList = styled.ul`
display: flex;
justify-content: space-between;
width: 526px;
`;

export const HeaderListItem = styled.li`
  padding: 6px 12px;

  &:focus,
  &:hover {
    background-color: #A6192E;
  }
`;

export const SchoolList = styled.select`
border: none;
margin-top:auto;
margin-bottom:auto;
margin-left: 193px;
`;

export const SchoolListItem = styled.option``;

export const UserIcon = styled.div`
width: 32px;
height: 32px;
background-image: url('../../images/icon.jpg');
`;


