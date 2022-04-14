import React from 'react';
import { diaryInterface } from 'interfaces';
import styled from 'styled-components';
import { Avatar } from 'organisms';
import { Chip } from 'atoms';
import { v4 as uuid } from 'uuid';
import { Edit24, Visibility24, VisibilityOff24 } from 'icons';

const Container = styled.div`
  border: 1px solid #80808060;
  border-radius: 15px;
  margin: 10px 5px 10px 5px;
`;

const HeaderPost = styled.div`
  padding: 5px 0px 0px 5px;
  box-sizing: border-box;
`;

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

const PrivateIconContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-right: 10px;
  svg {
    margin-left: 10px;
  }
`;

const TagContainer = styled.div`
  display: flex;
  overflow: hidden;
  flex-wrap: wrap;
  margin: 10px;
`;

const PostImage = styled.img`
  width: 100%;
  height: 100%;
  margin: 10px 0px 10px 0px;
  box-sizing: border-box;
  padding: 0px 10px 0px 10px;
`;
function Post(props: diaryInterface.postInterface) {
  const { data, onEdit } = props;
  const { id, nickName, nickNameTag, avatar, tag, image, privatePost, createdAt } = data;
  return (
    <Container>
      <HeaderPost className="full-width flex">
        <Avatar avatar={avatar} />
        <IDArea className="flex-column">
          <span>{nickName}</span>
          <span>#{nickNameTag}</span>
        </IDArea>
        <PrivateIconContainer>
          {privatePost ? <VisibilityOff24 fill="#60606080" /> : <Visibility24 fill="#60606080" />}
          <Edit24 id={id} onClick={onEdit} />
        </PrivateIconContainer>
      </HeaderPost>
      <TagContainer>
        {tag.map((tagName) => {
          return <Chip key={uuid()}>{tagName}</Chip>;
        })}
      </TagContainer>
      <PostImage src={image} alt="post" />
    </Container>
  );
}

export default Post;
