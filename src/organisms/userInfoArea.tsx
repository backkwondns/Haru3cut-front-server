import React from 'react';
import { Avatar } from 'organisms/index';
import styled from 'styled-components';
import { organismsInterface } from 'interfaces';

const IDArea = styled.div`
  margin-left: 10px;
  justify-content: center;
  .id.long {
    font-size: 14px;
  }
  .id-number {
    font-size: 13px;
    color: #00000060;
  }
`;

function UserInfoArea(props: organismsInterface.userInfoInterface) {
  const { nickName, nickNameTag, avatar } = props;
  return (
    <div className="leftArea flex">
      <Avatar avatar={avatar} />
      <IDArea className="flex-column">
        <span className={`id ${nickName.length >= 7 ? 'long' : ''}`}>{nickName}</span>
        <span className="id-number">#{nickNameTag}</span>
      </IDArea>
    </div>
  );
}

export default UserInfoArea;
